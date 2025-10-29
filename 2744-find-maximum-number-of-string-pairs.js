var maximumNumberOfStringPairs = function (words) {
    // Create a Set from the array to allow O(1) lookups and prevent duplicates
    let set = new Set(words);
    let count = 0; // Counter for valid string pairs

    // Iterate over each unique string in the set
    for (let str of set) {
        // Remove the current string from the set to avoid reusing it later
        set.delete(str);

        // Compute the reversed version of the current string
        let revStr = [...str].reverse().join("");

        // If the reversed string exists in the set,
        // it means str and revStr form a valid pair
        if (set.has(revStr)) {
            // Remove the reversed string to ensure each string is used only once
            set.delete(revStr);
            count++; // Increment pair count
        }
    }

    // Return total number of valid pairs found
    return count;
};

/*
var maximumNumberOfStringPairs = function (words) {
    let count = 0;
    let used = new Set(); // Keep track of words already paired

    for (let word of words) {
        let rev = [...word].reverse().join('');
        // If the reversed word is in the set, we found a pair
        if (used.has(rev)) {
            count++;
            used.delete(rev); // remove the reversed word since it's now paired
        } else {
            used.add(word); // otherwise, add current word to the set
        }
    }

    return count;
};

*/
