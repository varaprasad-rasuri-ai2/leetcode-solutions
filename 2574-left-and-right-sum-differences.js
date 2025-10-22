var leftRightDifference = function (a) {
    // Variable to keep cumulative sum for left side
    let s = 0;

    // Initialize leftSum with 0 for index 0 (no elements to the left)
    let leftSum = [0];

    // Build the leftSum array
    // leftSum[i] = sum of all elements before index i
    for (let i = 0; i < a.length - 1; i++) {
        let x = a[i];
        s += x;            // Add current element to sum
        leftSum.push(s);   // Push updated sum into leftSum
    }

    // Reset sum for right side calculation
    s = 0;

    // Initialize rightSum with 0 for the last index (no elements to the right)
    let rightSum = [0];

    // Build the rightSum array in reverse order
    // rightSum[i] = sum of all elements after index i
    for (let i = a.length - 1; i > 0; i--) {
        let x = a[i];
        s += x;               // Add current element to sum
        rightSum.unshift(s); // Insert at the beginning to maintain order
    }

    // Array to store final results
    let result = [];

    // Calculate the absolute difference between leftSum and rightSum at each index
    for (let i = 0; i < leftSum.length; i++) {
        result.push(Math.abs(leftSum[i] - rightSum[i]));
    }

    // Return the array of differences
    return result;
};
