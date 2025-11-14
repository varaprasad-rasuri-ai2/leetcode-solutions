var countWords = function (words1, words2) {
    // Frequency maps for both word lists
    let o1 = {}
    let o2 = {}

    // Count occurrences of each word in words1
    for (let w of words1) {
        o1[w] = (o1[w] ?? 0) + 1
    }

    // Count occurrences of each word in words2
    for (let w of words2) {
        o2[w] = (o2[w] ?? 0) + 1
    }

    // Counter for words that appear exactly once in BOTH arrays
    let c = 0

    // Check each word that appears in words1
    for (let w in o1) {
        // A word is "good" if:
        // - It appears exactly once in words1
        // - It appears exactly once in words2
        if (o1[w] === 1 && o2[w] === 1) {
            c++
        }
    }

    // Return the count of such words
    return c
};
