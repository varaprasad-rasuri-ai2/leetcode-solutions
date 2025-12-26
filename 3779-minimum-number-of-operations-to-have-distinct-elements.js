var minOperations = function (a) {
    // Set to keep track of elements we have already seen
    const seen = new Set();

    // Traverse the array from right to left
    for (let j = a.length - 1; j >= 0; j--) {
        // If the current element has already been seen,
        // a duplicate exists to the right
        if (seen.has(a[j])) {
            // Calculate and return the minimum number of operations
            // needed based on the index of the duplicate
            return Math.ceil((j + 1) / 3);
        }

        // Mark the current element as seen
        seen.add(a[j]);
    }

    // If no duplicates are found, no operations are needed
    return 0;
};
