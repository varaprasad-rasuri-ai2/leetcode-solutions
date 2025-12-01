var countGoodSubstrings = function (s) {
    let count = 0; // Initialize counter for good substrings

    // Loop through string, stopping 2 characters before end
    // because we need substrings of length 3
    for (let i = 0; i < s.length - 2; i++) {
        // Extract three consecutive characters
        let a = s[i],
            b = s[i + 1],
            c = s[i + 2];

        // Check if all three characters are distinct
        if (a !== b && b !== c && a !== c) {
            count++; // Increment count if substring is good
        }
    }

    return count; // Return total number of good substrings
};
