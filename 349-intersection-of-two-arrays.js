var intersection = function (nums1, nums2) {
    // Convert both arrays to sets to remove duplicates
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    // Result array for storing common elements
    let res = [];

    // Iterate through set1 and check if each element exists in set2
    for (let x of set1) {
        if (set2.has(x)) {
            res.push(x); // Common element → add to result
        }
    }

    // Return the array of unique common elements
    return res;
};
