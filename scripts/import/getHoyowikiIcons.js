const fs = require('fs');
const https = require('https');
const url = require('url');

// Function to make API request
function makeRequest(pageNum) {
    return new Promise((resolve, reject) => {
        const payload = JSON.stringify({
            filters: [],
            menu_id: "2",
            page_num: pageNum,
            page_size: 30,
            use_es: true
        });
        
        const urlObj = url.parse('https://sg-wiki-api.hoyolab.com/hoyowiki/genshin/wapi/get_entry_page_list');
        const options = {
            hostname: urlObj.hostname,
            path: urlObj.path,
            method: 'POST',
            headers: {
                'accept': 'application/json, text/plain, */*',
                'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
                'content-type': 'application/json;charset=UTF-8',
                'origin': 'https://wiki.hoyolab.com',
                'referer': 'https://wiki.hoyolab.com/',
                'sec-ch-ua': '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36',
                'x-rpc-language': 'en-us',
                'x-rpc-wiki_app': 'genshin',
                'Content-Length': Buffer.byteLength(payload)
            }
        };
        
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                try {
                    const response = JSON.parse(data);
                    if (response.retcode === 0 && response.data && response.data.list) {
                        resolve(response.data.list);
                    } else {
                        console.log(`API error on page ${pageNum}:`, response.message || 'Unknown error');
                        resolve([]);
                    }
                } catch(e) {
                    console.log(`Error parsing response on page ${pageNum}:`, e);
                    resolve([]);
                }
            });
        });
        
        req.on('error', (e) => {
            console.log(`Request error on page ${pageNum}:`, e);
            resolve([]);
        });
        
        req.write(payload);
        req.end();
    });
}

async function getHoyowikiIcons() {
    // Load character data to create name -> filename mapping
    let characterNameMap = {};
    // Create a reverse map for logging later: filename -> name
    let reverseCharacterNameMap = {}; 
    try {
        const charFiles = fs.readdirSync(`../../src/data/English/characters`);
        for (const filename of charFiles) {
            if (!filename.endsWith('.json')) continue;
            const charData = require(`../../src/data/English/characters/${filename}`);
            const fileKey = filename.substring(0, filename.indexOf('.'));
            characterNameMap[charData.name] = fileKey;
            reverseCharacterNameMap[fileKey] = charData.name; // Populate reverse map
        }
    } catch(e) {
        console.log('Error loading character data:', e);
        return;
    }
    
    // Load existing images
    let myimages = {};
    try {
        myimages = require(`../../src/data/image/characters.json`);
    } catch(e) {
        myimages = {};
    }
    
    // Fetch all pages
    let allCharacters = [];
    let pageNum = 1;
    let hasMore = true;
    
    console.log('Fetching Hoyowiki character icons...');
    while (hasMore) {
        console.log(`Fetching page ${pageNum}...`);
        const pageData = await makeRequest(pageNum);
        
        if (pageData.length === 0) {
            hasMore = false;
        } else {
            allCharacters = allCharacters.concat(pageData);
            // If we got less than page_size, we're done
            if (pageData.length < 30) {
                hasMore = false;
            } else {
                pageNum++;
            }
        }
        
        // Add a small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log(`Fetched ${allCharacters.length} characters from API`);
    
    // Match and update icons
    let updatedCount = 0;
    for (const apiChar of allCharacters) {
        const charName = apiChar.name;
        const iconUrl = apiChar.icon_url;
        
        if (!charName || !iconUrl) continue;

        if (charName === 'Traveler') {
            // Special handling for the Traveler to map to Aether and Lumine
            const travelerFileKeys = ['aether', 'lumine']; 
            
            travelerFileKeys.forEach(filename => {
                if (myimages[filename]) {
                    myimages[filename].hoyowiki_icon = iconUrl;
                    updatedCount++;
                } else {
                    console.log(`Warning: Traveler file key not found in myimages: ${filename}`);
                }
            });
            
        } else {
            // Standard matching for all other characters
            const filename = characterNameMap[charName];
            if (filename && myimages[filename]) {
                myimages[filename].hoyowiki_icon = iconUrl;
                updatedCount++;
            }
        }
    }
    
    // Save updated images
    fs.mkdirSync(`../../src/data/image`, { recursive: true });
    fs.writeFileSync(`../../src/data/image/characters.json`, JSON.stringify(myimages, null, '\t'));
    console.log(`Updated ${updatedCount} characters with hoyowiki_icon`);

    // --- LOGIC TO FIND MISSING ICONS IN MYIMAGES ---
    let missingIconCount = 0;
    for (const filename in myimages) {
        if (!myimages[filename].hoyowiki_icon) {
            if (missingIconCount === 0)
                console.log('Characters missing hoyowiki_icon:');
            const charName = reverseCharacterNameMap[filename] || filename; // Use the actual name if available, otherwise the filename key
            console.log(`  - ${charName}`);
            missingIconCount++;
        }
    }
    console.log(`Characters missing hoyowiki_icon: ${missingIconCount}`);
    // ---------------------------------------------------
}

module.exports = getHoyowikiIcons;