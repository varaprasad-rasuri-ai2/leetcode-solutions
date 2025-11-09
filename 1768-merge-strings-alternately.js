var mergeAlternately = function (w1, w2) {
    // Store lengths of the input strings
    let m = w1.length
    let n = w2.length

    // Initialize the result string
    let s = ''
    let i, j

    // Loop while both strings have characters left
    for (i = 0, j = 0; i < m && j < n; i++, j++) {
        s += w1[i] + w2[j]  // Append one character from each string alternately
    }

    // If w1 is longer, append the remaining characters
    for (; i < m; i++) {
        s += w1[i]
    }

    // If w2 is longer, append the remaining characters
    for (; j < n; j++) {
        s += w2[j]
    }

    // Return the merged string
    return s
};
