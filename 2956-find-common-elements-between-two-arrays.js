var findIntersectionValues = function (nums1, nums2) {
    // Convert both arrays into sets for fast lookup (O(1) average time)
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let count1 = 0;
    // Count how many elements in nums1 also exist in nums2
    for (let x of nums1) {
        if (set2.has(x)) {
            count1++;
        }
    }

    let count2 = 0;
    // Count how many elements in nums2 also exist in nums1
    for (let x of nums2) {
        if (set1.has(x)) {
            count2++;
        }
    }

    // Return both results as [answer1, answer2]
    return [count1, count2];
};


