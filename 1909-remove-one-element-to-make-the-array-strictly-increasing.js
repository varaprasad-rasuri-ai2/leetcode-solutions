/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
    let count = 0 // Keeps track of how many times the array fails to be strictly increasing

    // Loop through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // If the current number is not greater than the previous one,
        // then the "strictly increasing" rule is violated
        if (nums[i - 1] >= nums[i]) {
            count++ // Count this violation
        }

        // If we have more than one violation,
        // it’s impossible to fix the array by removing just one element
        if (count > 1) return false

        // If there’s a violation and removing nums[i-1] doesn’t help,
        // we try to "pretend" to remove nums[i] instead by adjusting nums[i]
        // Example: [1, 2, 10, 5, 7]
        // When i = 3 (nums[2]=10, nums[3]=5), we notice a violation.
        // Since nums[1]=2 < 5, we can remove 10 and move on.
        // But if nums[i - 2] >= nums[i], it means removing nums[i-1] won't help,
        // so we overwrite nums[i] with nums[i - 1] to simulate removing nums[i].
        if (i > 1 && nums[i - 2] >= nums[i]) {
            nums[i] = nums[i - 1]
        }
    }

    // If we get here, the array can be made strictly increasing
    // by removing at most one element
    return true
};
