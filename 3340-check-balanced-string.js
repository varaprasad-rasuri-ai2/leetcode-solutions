var isBalanced = function (s) {
    // Length of the string s
    let n = s.length

    // Sum of digits at even indices (0, 2, 4, ...)
    let se = 0

    // Sum of digits at odd indices (1, 3, 5, ...)
    let so = 0

    // Loop through each character in the string
    for (let i = 0; i < n; i++) {
        // Convert character to number
        let x = +s[i]

        // If index is even → add to se
        if (i % 2 === 0) {
            se += x
        } 
        // If index is odd → add to so
        else {
            so += x
        }
    }

    // A string is "balanced" if even-index sum equals odd-index sum
    return se === so
};
