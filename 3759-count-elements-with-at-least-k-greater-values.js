var countElements = function (a, k) {

    // Sort array so that greater values appear after smaller ones.
    a.sort((a, b) => a - b);

    let ct = 0;
    let n = a.length;

    for (let i = 0; i < n; i++) {
        // Find first index j where a[j] > a[i].
        // Everything from j to n-1 is strictly greater.
        let j = upperBound(a, a[i]);

        let gtXCount = n - j; // how many elements are greater

        // If at least k elements are greater than a[i], count it.
        if (gtXCount >= k) ct++;
    }

    return ct;
};


function upperBound(arr, target) {
    // Binary search to find first index where arr[mid] > target.

    let lo = 0;
    let hi = arr.length;

    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);

        if (arr[mid] <= target) {
            lo = mid + 1; // skip equal values
        } else {
            hi = mid; // candidate index
        }
    }

    return lo;
}



var countElements222 = function(nums, k) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let ct = 0;

    for (let i = 0; i < n; i++) {
        let greater = nums.filter(x => x > nums[i]).length;
        if (greater >= k) ct++;
    }

    return ct;
};
