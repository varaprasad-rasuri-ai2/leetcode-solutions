// Generates a new string by replacing each character
// with the next character in the alphabet
// 'z' wraps around to 'a'
function nextCharStr(s) {
    let t = '';

    // Iterate through each character in the string
    for (let ch of s) {
        if (ch === 'z') {
            // Wrap around from 'z' to 'a'
            t += 'a';
        } else {
            // Move to the next character using ASCII codes
            t += String.fromCharCode(ch.charCodeAt(0) + 1);
        }
    }
    return t;
}

var kthCharacter = function (pos) {
    // Start with the initial string
    let s = 'a';

    // If the first character is requested, return immediately
    if (pos === 1) return s[pos - 1];

    // Keep expanding the string until it reaches or exceeds position `pos`
    // Each expansion appends the "next-character" version of the current string
    while (s.length < pos) {
        s = s + nextCharStr(s);
    }

    // Return the character at the (pos - 1) index
    return s[pos - 1];
};
