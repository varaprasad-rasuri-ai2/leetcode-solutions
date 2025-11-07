/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    // Sort the array in ascending order
    // This ensures that pairing adjacent elements maximizes the sum of minimums
    nums.sort((a, b) => a - b);

    let sum = 0;  // Initialize sum of min elements from each pair

    // Iterate through the array in steps of 2
    // nums[0], nums[1] -> pair 1 (take nums[0] as min)
    // nums[2], nums[3] -> pair 2 (take nums[2] as min)
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];  // Add the smaller element of the current pair
    }

    return sum;  // Return the maximized sum
};
