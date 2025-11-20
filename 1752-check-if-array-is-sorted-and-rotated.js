var check = function (a) {

    // Try every possible pivot index i
    for (let i = 0; i < a.length; i++) {

        // Split the array into:
        // left  = elements before i
        // right = elements starting from i
        let left = a.slice(0, i);
        let right = a.slice(i);

        // ------------------------------------------
        // Check 1: left + right (normal rotation)
        // ------------------------------------------

        // Combine the two parts as if "rotating" the array at index i
        let combined = [...left, ...right];

        // Create a sorted version of the same array
        let sorted = [...combined].sort((a, b) => a - b);

        // If the rotated version equals the sorted array,
        // then the original array can become sorted by rotation.
        if (combined.toString() === sorted.toString()) {
            return true;
        }

        // ------------------------------------------
        // Check 2: right + left (reverse rotation)
        // ------------------------------------------

        // Try the opposite rotation order
        let combinedReverse = [...right, ...left];

        // Sort that version too
        let sortedCombinedReverse = [...combinedReverse].sort((a, b) => a - b);

        // If reverse rotation yields a sorted array,
        // then the array is rotatable into sorted order in reverse.
        if (combinedReverse.toString() === sortedCombinedReverse.toString()) {
            return true;
        }
    }

    // If no rotation produced a sorted array, return false
    return false;
};
