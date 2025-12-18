let cl = console.log

var canConstruct = function (ransomNote, magazine) {
    // Optional debug log
    // cl({ ransomNote, magazine })

    // Alias variables for readability
    let r = ransomNote, m = magazine

    // Create a frequency object to count letters in magazine
    let freq = {}

    // Count occurrences of each letter in magazine
    for (let ch of m) {
        // If letter exists, increment; else start at 0
        freq[ch] = (freq[ch] ?? 0) + 1
    }

    // Optional debug log
    // cl({ freq })

    // Check if ransomNote can be constructed
    for (let ch of r) {
        // If current letter does not exist in magazine (or used up), return false
        if (!freq[ch]) return false

        // Use the letter: decrement its count
        freq[ch]--
    }

    // All letters in ransomNote are available in magazine
    return true
};
