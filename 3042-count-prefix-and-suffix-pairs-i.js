var countPrefixSuffixPairs = function (words) {
    // Number of words in the list
    let n = words.length

    // Counter for valid prefix–suffix pairs
    let c = 0

    // Outer loop: pick the first word w1
    for (let i = 0; i < n; i++) {
        let w1 = words[i]

        // Inner loop: pick the second word w2 (after w1)
        for (let j = i + 1; j < n; j++) {
            let w2 = words[j]

            // Check if w1 is BOTH:
            // 1) a prefix of w2  
            // 2) a suffix of w2
            // Example: w1 = "ab", w2 = "abcab" → true
            if (w2.startsWith(w1) && w2.endsWith(w1)) {
                c++               // Found a valid pair
            }
        }
    }

    // Return the total number of valid prefix–suffix pairs
    return c
};
