// Returns the length of the Longest Increasing Subsequence (LIS)
// Uses an optimized O(n log n) approach with binary search
const lengthOfLIS = function lengthOfLIS(a) {
    // dp[i] will store the smallest possible tail value
    // of an increasing subsequence of length (i + 1)
    const dp = [a[0]];

    // Process each element in the array
    for (let i = 1; i < a.length; i += 1) {
        // Find the index where a[i] should be placed in dp
        // (first element >= a[i])
        const iGE = lowerBound(a[i], dp);

        // Replace or extend dp to maintain the smallest possible tail
        dp[iGE] = a[i];
    }

    // Length of dp represents the length of the LIS
    return dp.length;
};


// Binary search to find the first index in arr
// where the value is greater than or equal to target
function lowerBound(target, arr, lo = 0, hi = arr.length) {
    // Continue until the search space is exhausted
    while (lo < hi) {
        // Find the middle index
        const mid = Math.trunc((lo + hi) / 2);

        // If middle element is less than target,
        // discard the left half including mid
        if (arr[mid] < target) {
            lo = mid + 1;
        } else {
            // Otherwise, discard the right half
            hi = mid;
        }
    }

    // lo is the index of the first element >= target
    return lo;
}
