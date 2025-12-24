var reverseVowels = function (s) {
    // Array to store all vowels found in the string
    let vowels = []

    // First pass: collect all vowels from the string
    for (let ch of s) {
        // Check if the character is a vowel (case-insensitive)
        if (/[aeiouAEIOU]/.test(ch)) {
            vowels.push(ch)
        }
    }

    // Reverse the order of collected vowels
    vowels.reverse()

    // String to build the final result
    let t = ''

    // Second pass: rebuild the string
    for (let ch of s) {
        // If the character is a vowel, replace it with the next reversed vowel
        if (/[aeiouAEIOU]/.test(ch)) {
            t += vowels.shift()
        } else {
            // Non-vowel characters remain unchanged
            t += ch
        }
    }

    // Return the string with vowels reversed
    return t
};
