// Helper function: get ASCII value of a character
// Example: ascii('a') → 97, ascii('b') → 98, etc.
const ascii = (ch) => ch.charCodeAt(0);

// Helper function: get 0-based alphabet index
// Example: charIndex('a') → 0, charIndex('b') → 1, ..., charIndex('z') → 25
const charIndex = (ch) => ascii(ch) - ascii('a');

// Helper function: get 1-based position in the alphabet
// Example: charPos('a') → 1, charPos('b') → 2, ..., charPos('z') → 26
const charPos = (ch) => charIndex(ch) + 1;

// Helper function: get reversed alphabet position
// ('a' = 26, 'b' = 25, ..., 'z' = 1)
// Example: reverseCharPos('a') → 26, reverseCharPos('z') → 1
const reverseCharPos = (ch) => 26 - charIndex(ch);


// Main function to calculate the reverse degree of a string
var reverseDegree = function (s) {
    // Initialize sum to 0
    let sum = 0;

    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];     // Current character
        let pos = i + 1;   // 1-based position of character in the string
        let revChPos = reverseCharPos(ch); // Position in reversed alphabet

        // Multiply reversed alphabet position with string position
        let prod = revChPos * pos;

        // Add to total sum
        sum += prod;
    }

    // Return the total reverse degree
    return sum;
};
