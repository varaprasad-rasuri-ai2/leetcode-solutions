var sumOfGoodNumbers = function (nums, k) {
    let s = 0; // Initialize sum of good numbers

    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // Check if the current element is "good"
        // Condition 1: Either there is no element at index i - k, or nums[i] is greater than nums[i - k]
        // Condition 2: Either there is no element at index i + k, or nums[i] is greater than nums[i + k]
        if ((i - k < 0            || nums[i] > nums[i - k]) && 
            (i + k >= nums.length || nums[i] > nums[i + k])) {
            s += nums[i]; // Add the good number to the sum
        }
    }

    return s; // Return the total sum of all good numbers
};

var sumOfGoodNumbers222 = function (nums, k) {
    let s = 0; // Initialize sum of good numbers

    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // Check if the current element is "good"
        // Condition 1: Either there is no element at index i - k, or nums[i] is greater than nums[i - k]
        // Condition 2: Either there is no element at index i + k, or nums[i] is greater than nums[i + k]
        if ((i < k                || nums[i] > nums[i - k]) && 
            (i + k >= nums.length || nums[i] > nums[i + k])) {
            s += nums[i]; // Add the good number to the sum
        }
    }

    return s; // Return the total sum of all good numbers
};

