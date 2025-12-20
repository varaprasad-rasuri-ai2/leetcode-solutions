// Shortcut for console.log (used for debugging)
let cl = console.log;

// Function to find the index of the dominant number
var dominantIndex = function (nums) {
    // Length of the array
    let n = nums.length;

    // Store the maximum value in the array
    let max = -1;

    // Store the index of the maximum value
    let index = -1;

    // First loop:
    // Find the largest number and its index
    for (let i = 0; i < n; i++) {
        if (nums[i] > max) {
            max = nums[i];   // update maximum value
            index = i;       // update index of maximum value
        }
    }

    // Second loop:
    // Check if the largest number is at least twice every other number
    for (let i = 0; i < n; i++) {
        // Skip the largest number itself
        if (i !== index && max < nums[i] * 2) {
            // Condition fails, so return -1
            return -1;
        }
    }

    // If all checks pass, return the index of the largest number
    return index;
};
