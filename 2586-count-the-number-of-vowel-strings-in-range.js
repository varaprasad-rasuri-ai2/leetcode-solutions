var vowelStrings = function (words, left, right) {
    // Counter for how many valid words we find
    let c = 0

    // Iterate from index `left` to index `right` (inclusive)
    for (let i = left; i <= right; i++) {
        // Current word
        let w = words[i]

        // First character of the word
        let f = w[0]

        // Last character of the word using .at(-1) (modern JS)
        let l = w.at(-1)

        // Check if BOTH first and last characters are vowels
        // /[aeiou]/ tests lowercase vowels a,e,i,o,u
        if (/[aeiou]/.test(f) && /[aeiou]/.test(l)) {
            c++   // Valid vowel-start and vowel-end word
        }
    }

    // Return the total count of such words
    return c
};
