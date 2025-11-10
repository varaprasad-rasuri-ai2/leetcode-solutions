/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Optional debug logger
let cl = console.log

var moveZeroes = function (nums) {
    let left = 0   // Pointer to the position where the next non-zero should go
    cl({ nums })   // Print initial state for debugging

    // Traverse the array with another pointer 'right'
    for (let right = 0; right < nums.length; right++) {

        // If the current number is not zero, it needs to move forward
        if (nums[right] !== 0) {

            // Swap elements:
            // - Move this non-zero element to the current 'left' position
            // - Move whatever was at 'left' (possibly zero) to 'right'
            [nums[left], nums[right]] = [nums[right], nums[left]]

            // Increment 'left' so the next non-zero will go after it
            left++
        }

        // Optional: log internal state
        // cl({ left, right, nums })
    }

    // No need to return anything since we modify the array in-place
}
