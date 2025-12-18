let cl = console.log

var longestPalindrome = function (s) {
    // Optional debug log to see input
    // cl({ s })

    // Frequency object to count letters
    let freq = {}

    // Length of the longest palindrome we can build
    let len = 0

    // Flag to indicate if any letter has odd frequency
    let isOdd = false

    // Optional: count of odd-frequency letters (not strictly necessary for length)
    let oddCount = 0

    // Count frequency of each character in the string
    for (let ch of s) {
        // If character exists, increment; else start at 0
        freq[ch] = (freq[ch] ?? 0) + 1
    }

    // Optional debug log
    // cl({ freq })

    // Loop through all distinct characters in the frequency object
    for (let ch in freq) {
        if (freq[ch] % 2 === 0) {
            // Even frequency → can use all of them symmetrically in palindrome
            len += freq[ch]
            // cl({even:len}) // optional debug
        } else {
            // Odd frequency → can use freq[ch] - 1 letters to keep symmetry
            len += freq[ch] - 1

            // Mark that there is at least one odd character
            isOdd = true

            // Optional: track how many letters have odd frequency
            oddCount++
            // cl({ch}) 
            // cl({odd:len})
        }
    }

    // If there was at least one odd-frequency letter,
    // we can place exactly one in the middle of the palindrome
    // Otherwise, the length is just the sum of all even counts (and odd-1 counts)
    // cl({ oddCount, isOdd, len })
    return isOdd ? len + 1 : len
};
