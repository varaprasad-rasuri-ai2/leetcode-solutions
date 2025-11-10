let cl = console.log

var merge = function (a, m, b, n) {
    let i = m - 1      // pointer for last element in nums1's valid part
    let j = n - 1      // pointer for last element in nums2
    let k = m + n - 1  // pointer for the final position in nums1 (end)

    cl({ a, m, b, n }) // debug log (optional)

    // loop until all elements from nums2 are merged
    while (j >= 0) {
        cl({ j, i, k }) // debug log (optional)

        // if current element in nums1 > current in nums2,
        // place it at the end, and move i & k backward
        if (i >= 0 && a[i] > b[j]) {
            a[k--] = a[i--]
        } else {
            // otherwise, take element from nums2
            a[k--] = b[j--]
        }

        cl({ a }) // debug log (optional)
    }
};


var merge222= function (nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1

    while (j >= 0) {
        nums1[k--] = (i >= 0 && nums1[i] > nums2[j])
            ? nums1[i--]
            : nums2[j--]
    }
}
