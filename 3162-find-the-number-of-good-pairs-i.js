var numberOfPairs = function (nums1, nums2, k) {

    // Multiply every element in nums2 by k once
    // This avoids recalculating nums2[j] * k inside the nested loop
    nums2 = nums2.map(x => x * k)

    let count = 0

    // Loop through every element in nums1
    for (let i = 0; i < nums1.length; i++) {

        // Loop through every element in modified nums2
        for (let j = 0; j < nums2.length; j++) {

            // Check if nums2[j] divides nums1[i] evenly
            if (nums1[i] % nums2[j] === 0) {
                count++   // Increase count if divisible
            }
        }
    }

    // Return total valid pairs
    return count
};

var numberOfPairs2222 = function (nums1, nums2, k) {

    let count = 0

    // Loop through nums1
    for (let i = 0; i < nums1.length; i++) {

        // Loop through nums2
        for (let j = 0; j < nums2.length; j++) {

            // Multiply nums2[j] by k during each iteration
            // This causes repeated multiplication operations
            if (nums1[i] % (nums2[j] * k) === 0) {
                count++   // Increase count if divisible
            }
        }
    }

    // Return total valid pairs
    return count
};
