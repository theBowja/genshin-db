import * as genshindb from "genshin-db";

// Test examples
genshindb.characters("names", { matchCategories: true }); // string[]
genshindb.characters("names", { matchCategories: true, verboseCategories: true }); // Character[]

genshindb.characters("names"); // Character | undefined
genshindb.characters("names", { matchCategories: false }); // Character | undefined
genshindb.characters("foobar"); // Character | undefined
genshindb.characters("foobar", { matchCategories: false }); // Character | undefined
genshindb.characters("foobar", { verboseCategories: false }); // Character | undefined

genshindb.characters("foobar", { matchCategories: true }); // Character | string[] | undefined
genshindb.characters("foobar", { matchCategories: true, verboseCategories: true }); // Character | Character[] | undefined
	