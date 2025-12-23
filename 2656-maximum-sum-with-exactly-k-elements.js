// Optimized approach
// Finds the maximum element once and keeps increasing it
var maximizeSum = function (a, k) {
    // Find the maximum value in the array (O(N))
    let max = Math.max(...a);

    // Variable to store the total score
    let score = 0;

    // Repeat k times
    while (k--) {
        // Add current maximum to the score
        score += max;

        // Increment the maximum for the next iteration
        max++;
    }

    // Return the final score
    return score;
};


// Less optimal approach using sorting
var maximizeSum2222222 = function (nums, k) {
    // Sort the array in ascending order (O(N log N))
    nums.sort((a, b) => a - b);

    // Variable to store the total score
    let score = 0;

    // Repeat k times
    while (k--) {
        // Remove the current largest element
        let max = nums.pop();

        // Add it to the score
        score += max;

        // Push back the incremented value
        nums.push(max + 1);
    }

    // Return the final score
    return score;
};
