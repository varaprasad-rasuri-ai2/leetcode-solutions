var buildArray = function (nums) {
    // Step 1: Initialize an empty array to store the result
    let ans = [];

    // Step 2: Loop through each index 'i' in the array 'nums'
    for (let i = 0; i < nums.length; i++) {

        // Step 3: For each index i, the new value should be nums[nums[i]]
        // - nums[i] gives us an index
        // - nums[nums[i]] accesses the value at that index
        // Example:
        //   nums = [0, 2, 1, 5, 3, 4]
        //   i = 1 → nums[i] = 2 → nums[nums[i]] = nums[2] = 1
        ans.push(nums[nums[i]]);
    }

    
    // Step 4: Return the resulting array
    return ans;
};
