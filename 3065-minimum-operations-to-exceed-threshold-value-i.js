// Function to find the minimum number of operations
// needed so that all elements in array 'a' are >= k
var minOperations = function (a, k) {
    
    // Use the reduce() function to accumulate (sum up) how many elements are smaller than k.
    // For each element 'x' in array 'a':
    //  → Check if x < k
    //     - If true, add 1 (we need one operation to remove it)
    //     - If false, add 0 (no operation needed)
    //
    // Example:
    // a = [2, 11, 3, 5], k = 5
    // x=2 (<5) → +1
    // x=11 (>=5) → +0
    // x=3 (<5) → +1
    // x=5 (>=5) → +0
    // Total = 2 operations
    return a.reduce((sum, x) => sum + (x < k ? 1 : 0), 0);
};
