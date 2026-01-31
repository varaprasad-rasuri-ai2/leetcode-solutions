// Merges two sorted subarrays of a into one sorted range
// First subarray: a[lo1 ... hi1]
// Second subarray: a[lo2 ... hi2]

function merge(a, lo1, hi1, lo2, hi2) {
    // Temporary array to store merged result
    let res = [];

    let i, j;

    // Compare elements from both subarrays and merge in sorted order
    for (i = lo1, j = lo2; i <= hi1 && j <= hi2;) {
        if (a[i] <= a[j]) {
            res.push(a[i]);
            i++;
        } else {
            res.push(a[j]);
            j++;
        }
    }

    // Copy any remaining elements from the first subarray
    while (i <= hi1) {
        res.push(a[i]);
        i++;
    }

    // Copy any remaining elements from the second subarray
    while (j <= hi2) {
        res.push(a[j]);
        j++;
    }

    // Copy the merged result back into the original array
    let k = 0;
    for (let i = lo1; i <= hi2;) {
        a[i++] = res[k++];
    }
}

// Recursively divides the array into halves
function divide(a, lo, hi) {
    // Base case: single element is already sorted
    if (lo === hi) return;

    // Find the middle index
    let mid = lo + Math.trunc((hi - lo) / 2);

    // Recursively sort left half
    divide(a, lo, mid);

    // Recursively sort right half
    divide(a, mid + 1, hi);

    // Merge the two sorted halves
    merge(a, lo, mid, mid + 1, hi);
}

// Main function to sort the array
var sortArray = function (a) {
    let n = a.length;

    // Start merge sort on the full array
    divide(a, 0, n - 1);

    // Return the sorted array
    return a;
};
