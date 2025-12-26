// Returns the first index where a[index] >= tar
// This is a classic LOWER BOUND binary search
function lowerBoundFirstEG(a, tar, lo = 0, hi = a.length) {
    // Search space is [lo, hi)
    while (lo < hi) {
        // Compute middle index
        let mid = Math.trunc(lo / 2 + hi / 2);

        if (a[mid] >= tar) {
            // a[mid] satisfies the condition
            // Move left to see if there is an earlier index
            hi = mid;
        } else {
            // a[mid] < tar, so discard left half
            lo = mid + 1;
        }
    }
    // lo is the first index where a[lo] >= tar
    return lo;
}

// Returns the first index where a[index] > tar
// This is a classic UPPER BOUND binary search
function upperBoundFirstG(a, tar, lo = 0, hi = a.length) {
    // Search space is [lo, hi)
    while (lo < hi) {
        // Compute middle index
        let mid = Math.trunc(lo / 2 + hi / 2);

        if (a[mid] > tar) {
            // a[mid] satisfies the condition
            // Move left to find the earliest such index
            hi = mid;
        } else {
            // a[mid] <= tar, so discard left half
            lo = mid + 1;
        }
    }
    // lo is the first index where a[lo] > tar
    return lo;
}

// Main function for LeetCode 2529
var maximumCount = function (a) {

    // i = index of first element >= 0
    // Since array is sorted, all elements before i are negative
    // Therefore, i = number of negative integers
    let i = lowerBoundFirstEG(a, 0);

    // j = index of first element > 0
    // Elements from j to end are positive
    // Number of positives = a.length - j
    let j = upperBoundFirstG(a, 0);

    // Return the maximum of negative and positive counts
    return Math.max(i, a.length - j);
};
