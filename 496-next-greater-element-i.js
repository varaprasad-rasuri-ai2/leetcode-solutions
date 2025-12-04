let cl = console.log;

var nextGreaterElement = function (nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;

    let res = [];

    for (let i = 0; i < n1; i++) {

        // Default: assume no next greater element exists
        let nextGreater = -1;

        // Scan nums2 to find where nums1[i] appears
        for (let j = 0; j < n2; j++) {

            cl({ i, j });
            cl({ n1: nums1[i], n2: nums2[j] });

            // When we find nums1[i] in nums2
            if (nums2[j] === nums1[i]) {

                // Look to the right of position j in nums2
                // to find the FIRST element greater than nums1[i]
                for (let k = j + 1; k < n2; k++) {
                    // Check if this is a valid next greater element
                    if (nums2[k] > nums1[i]) {
                        nextGreater = nums2[k]; // store it
                        break;                 // stop inner search
                    }
                }

                // Debug log (you printed nums2[j+1], but nextGreater may differ)
                cl(nums1[i], '===', nums2[j], 'next-->', nums2[j + 1]);

                // Stop searching nums2 for this nums1[i]
                break;
            }
        }

        // Append the result for nums1[i]
        res.push(nextGreater);
    }

    return res;
};
