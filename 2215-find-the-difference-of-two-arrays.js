var findDifference = function (nums1, nums2) {
    // Convert both arrays to sets to remove duplicates
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    // r1 → elements that are in nums1 but not in nums2
    let r1 = [];
    for (let x of set1) {
        if (!set2.has(x)) {
            r1.push(x);
        }
    }

    // r2 → elements that are in nums2 but not in nums1
    let r2 = [];
    for (let x of set2) {
        if (!set1.has(x)) {
            r2.push(x);
        }
    }

    // Return both lists as [r1, r2]
    return [r1, r2];
};
