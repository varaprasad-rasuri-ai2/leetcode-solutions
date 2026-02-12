// Function to find the minimum operations needed
// to make the sum of array 'a' divisible by 'k'
var minOperations = function (a, k) {
    // Step 1: Calculate total sum of the array
    let tot = a.reduce((sum, x) => sum + x, 0);

    // Step 2: Find remainder when sum is divided by k
    // This tells us how far the sum is from being divisible by k
    let remaining = tot % k;

    
    // Step 3: If remainder = 0, it's already divisible → 0 operations needed
    // Otherwise, we need to reduce the sum by 'remaining' to make it divisible
    return remaining === 0 ? 0 : remaining;
};
