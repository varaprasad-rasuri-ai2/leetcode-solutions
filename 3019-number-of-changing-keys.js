var countKeyChanges = function (s) {
    // Store the length of the input string
    let n = s.length;

    // Convert the string to lowercase to make the comparison case-insensitive.
    // (Typing 'A' after 'a' should NOT count as a key change.)
    s = s.toLowerCase();

    // Initialize a counter for the number of key changes
    let cc = 0;

    // Start from the second character (index 1)
    for (let i = 1; i < n; i++) {
        // Compare the current character with the previous one.
        // If they are different, it means the user changed the key.
        if (s[i - 1] !== s[i]) {
            cc++;
        }
    }

    // Return the total number of key changes
    return cc;
};
