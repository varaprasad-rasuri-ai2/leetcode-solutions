// Helper function to "right shift" a character by a given number of positions in the alphabet
// Example: rightShiftChar('a', 4) => 'e'
const rightShiftChar = (ch, times) => {
    // Get the ASCII code of the character
    let ascii = ch.charCodeAt(0)  // 'a' → 97

    // Add the number of shifts
    ascii += times                // e.g., 97 + 4 = 101

    // Convert back to a character
    return String.fromCharCode(ascii)  // 101 → 'e'
}


// Main function to replace digits in the string with shifted characters
var replaceDigits = function (s) {
    let i = 0              // index to track current character
    let t = ''             // result string

    // Loop through each character in the string
    for (let ch of s) {
        if (i % 2 === 0) {
            // If index is even → it is a letter, just append it
            t += ch
        } else {
            // If index is odd → it is a digit
            // Shift the previous letter by the numeric value of the current digit

            let prevCh = s[i - 1]    // previous character (letter)
            let times = +s[i]        // current character as number (digit)
            let ch2 = rightShiftChar(prevCh, times) // shift the letter
            t += ch2
        }
        i++
    }

    // Return the final transformed string
    return t
};
