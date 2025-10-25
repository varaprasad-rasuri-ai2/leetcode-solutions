/**
 * @param {number[]} nums   // The array of numbers
 * @param {number} target   // The target sum value
 * @return {number}         // The count of pairs with sum < target
 */
var countPairs = function (nums, target) {
    // Initialize a counter to keep track of valid pairs
    let count = 0;

    // Outer loop: iterate through each element (nums[i])
    for (i = 0; i < nums.length; i++) {

        // Inner loop: iterate through all elements after nums[i]
        // This ensures i < j (no duplicates, no self-pairs)
        for (j = i + 1; j < nums.length; j++) {

            // Check if the sum of nums[i] and nums[j] is less than the target
            if (nums[i] + nums[j] < target) {
                // If yes, increment the counter
                count++;
            }
        }
    }

    // Return the total count of valid pairs
    return count;
};
