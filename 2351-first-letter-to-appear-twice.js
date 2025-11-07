// Helper function to convert a lowercase character to its 0-based index
const charIndex = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0);

var repeatedCharacter = function (s) {
    let bitmap = 0;  // Bitmask to track which letters have been seen

    for (let ch of s) {
        let index = charIndex(ch);  // Get 0-based index of the character ('a' -> 0, 'b' -> 1, etc.)

        // Check if this character has already been seen
        if (bitmap & (1 << index)) {
            return ch;  // Found the first character that appears twice
        }

        // Mark this character as seen
        bitmap |= 1 << index;
    }
};

var repeatedCharacter22222222 = function (s) {
    let set = new Set();  // Stores letters that have been seen

    for (let ch of s) {
        if (set.has(ch)) {
            return ch;  // Found the first letter that appears twice
        }
        set.add(ch);  // Add the letter to the set
    }
};
