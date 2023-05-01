# delete lang without eng jpn
cd src/min/ || exit 1
mkdir tmp && cp data.min.json tmp/data.min.json && cd tmp
langs=("English" "Japanese")
elements=("artifacts" "weapons" "characters" "talents" "constellations")
args=("other.json")
cat data.min.json | jq 'del(.data,.index)' > other.json
for lang in "${langs[@]}"; do
    for element in "${elements[@]}"; do
        cat data.min.json | jq '{data:{'$lang':{'$element':.data.'$lang'.'$element'}}}' > "data."$lang.$element.json
        cat data.min.json | jq '{index:{'$lang':{'$element':.index.'$lang'.'$element'}}}' > "index."$lang.$element.json
        args+=("data."$lang.$element.json)
        args+=("index."$lang.$element.json)
    done
done
jq --slurp 'reduce .[] as $item ({}; . * $item)' "${args[@]}" | jq -c . > data.min.json
jq 'walk(if type == "object" then del(.description,.story) else . end)' data.min.json | jq -c . > ../data.min.json
cd ../ && rm -r tmp