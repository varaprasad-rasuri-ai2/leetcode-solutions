/**
 * @param {number[]} nums       // The array of numbers
 * @param {number} k            // Number of operations to perform
 * @param {number} multiplier   // Multiplier to apply to the minimum element
 * @return {number[]}           // The final state of nums
 */
var getFinalState = function (nums, k, multiplier) {
    // Perform k operations
    for (let i = 0; i < k; i++) {
        //  Find the smallest value in the array
        let minValue = Math.min(...nums);

        //  Find the first occurrence (lowest index) of that minimum value
        let minIndex = nums.indexOf(minValue);

        //  Multiply that element by the given multiplier
        nums[minIndex] *= multiplier;
    }

    
    //  Return the updated array after all operations
    return nums;
};
