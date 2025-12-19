// Function to check if a string can be formed by repeating a substring
var repeatedSubstringPattern = function (s) {
    // Length of the input string
    let n = s.length

    // Try all possible substring lengths from 1 up to half of the string
    for (let len = 1; len <= n / 2; len++) {

        // If the string length is not divisible by len,
        // it cannot be made by repeating a substring of this length
        if (n % len !== 0) continue

        // Take the fi
