var returnToBoundaryCount = function (a) {
    let prefixSum = 0; // Tracks the ant's current position (net movement)
    let count = 0;     // Counts how many times the ant returns to the boundary (position 0)

    // Iterate through each movement in the array
    for (const e of a) {
        prefixSum += e; // Update position: positive = right, negative = left

        // Check if the ant has returned to the starting position
        if (prefixSum === 0) {
            count++; // Increment count for each return to boundary
        }
    }

    // Return total number of times the ant returned to the boundary
    return count;
};
