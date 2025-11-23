var sumZero = function (n) {
    // This array will hold the final result of n numbers summing to 0
    let result = [];

    // If n is odd, include a single 0 in the array.
    // Zero does not affect the sum, and it helps us handle the odd count.
    if (n % 2 === 1) {
        result.push(0);
    }

    // Add pairs of numbers: (1, -1), (2, -2), (3, -3), ...
    // Each pair sums to zero, so the total sum stays balanced.
    // Keep adding pairs until the array contains n elements.
    for (let i = 1; result.length < n; i++) {
        result.push(i);   // positive number
        result.push(-i);  // its negative counterpart
    }

    // Return the completed array of n integers whose sum is zero
    return result;
};
