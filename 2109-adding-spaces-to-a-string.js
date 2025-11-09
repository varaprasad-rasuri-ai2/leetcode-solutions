var addSpaces = function (s, spaces) {
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
