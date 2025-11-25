var detectCapitalUse = function (word) {
    // Separate the first character and the remaining characters
    let [first, rest] = [word[0], word.slice(1)];

    // Case 1: First letter is uppercase
    if (first === first.toUpperCase()) {
        // Check if all the rest are uppercase
        // This covers "USA" (all caps)
        if (rest === rest.toUpperCase()) {
            return true;
        }
    }

    // Case 2: All remaining letters are lowercase
    // This covers:
    // - "leetcode": all lowercase
    // - "Google": only first uppercase, rest lowercase
    return (rest === rest.toLowerCase());
};
