var maxTotalValue = function (nums, k) {
    
    let maxNum = Math.max(...nums)   // Find the largest number in the array
    let minNum = Math.min(...nums)   // Find the smallest number in the array
    let maxValue = maxNum - minNum   // Maximum possible subarray value

    return k * maxValue              // Multiply by k because we can pick the same subarray k times
};


