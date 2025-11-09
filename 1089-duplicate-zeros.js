var duplicateZeros = function (a) {
    // Store the original length of the array
    let n = a.length;

    // Loop through the array
    for (let i = 0; i < n; i++) {
        // When a zero is found
        if (a[i] === 0) {
            // Insert an extra zero immediately after it
            a.splice(i + 1, 0, 0);

            // Skip the newly added zero to avoid duplicating it again
            i++;
        }
    }

    // Ensure the array length stays the same as the original
    // This trims off any extra elements added beyond the original length
    a.length = n;
};
