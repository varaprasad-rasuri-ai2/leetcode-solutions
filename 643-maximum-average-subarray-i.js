let cl = console.log

var findMaxAverage = function (nums, k) {
    // Log the input for debugging
    cl({ nums, k })

    let numsLength = nums.length
    let sum = 0
    let maxSum = -Infinity  // Initialize to lowest possible number

    // Calculate the initial window sum of the first 'k' elements
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }

    // This is the maximum sum we've seen so far
    maxSum = sum

    // Slide the window across the array, one element at a time
    for (let i = k; i < numsLength; i++) {
        // Add the new element and remove the element that slid out
        sum += nums[i] - nums[i - k]

        // Update maxSum if the current window sum is larger
        maxSum = Math.max(maxSum, sum)
    }

    // Return the maximum average found
    return maxSum / k
};


var findMaxAverage3333 = function (nums, k) {
    let sum = nums.slice(0, k).reduce((a, b) => a + b, 0);
    let maxSum = sum;

    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        if (sum > maxSum) maxSum = sum;
    }

    return maxSum / k;
};
