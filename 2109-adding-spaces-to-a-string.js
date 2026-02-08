var addSpaces222 = function (s, spaces) {
    let spaceIndexesSet = new Set(spaces)  // Convert the array of space positions to a Set for O(1) lookups

    let t = ''      // Result string to build
    let n = s.length

    for (let i = 0; i < n; i++) {
        if (spaceIndexesSet.has(i)) {  // If current index is in spaces, add a space before the character
            t += ' '
        }
        t += s[i]   // Append current character
    }

    return t
};

var addSpaces = function(s, spaces) {
    // Initialize an array to build the final string efficiently
    // Using an array avoids repeated string concatenation (which is slow for large strings)
    let result = [];

    // Pointer to track the current index in the 'spaces' array
    let j = 0;

    // Loop through each character in the original string
    for (let i = 0; i < s.length; i++) {

        // If the current index matches the next space index
        if (j < spaces.length && spaces[j] === i) {
            result.push(' '); // Add a space before the character
            j++; // Move to the next space index
        }

        // Add the current character to the result
        result.push(s[i]);
    }

    // Join all characters in the array to form the final string
    return result.join('');
};

