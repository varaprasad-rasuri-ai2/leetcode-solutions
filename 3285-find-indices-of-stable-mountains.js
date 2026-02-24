var stableMountains = function (heights, threshold) {
    // Get the number of mountains
    let n = heights.length;

    // Create an array to store the indices of "stable" mountains
    let stableMs = [];

    // Start from the second mountain (index 1)
    // because each mountain's stability depends on the *previous* mountain
    for (let i = 1; i < n; i++) {
        // Check if the previous mountain's height is greater than the threshold
        if (heights[i - 1] > threshold) {
            // If yes, then the current mountain (index i) is considered stable
            stableMs.push(i);
        }
    }

    
    // Return the list of indices of stable mountains
    return stableMs;
};
