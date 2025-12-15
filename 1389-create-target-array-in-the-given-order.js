var createTargetArray = function (nums, index) {
    // Get the length of the nums array
    let n = nums.length;

    // Initialize an empty target array
    let target = [];

    // Loop through each element in nums
    for (let i = 0; i < n; i++) {
        // Current value to insert
        let x = nums[i];

        // Index position where x should be inserted
        let j = index[i];

        // Insert x at position j in the target array
        // Existing elements from position j onward are shifted right
        target.splice(j, 0, x);
    }

    // Return the final constructed target array
    return target;
};


