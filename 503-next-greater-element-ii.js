var nextGreaterElements = function (nums) {
    let n = nums.length
    let res = []   // will store next greater elements for each index

    for (let i = 0; i < n; i++) {

        // For each nums[i], we search ahead in circular fashion
        for (let j = 1; j < n * 2; j++) {

            // Circular index: wraps around using modulo
            let idx = (i + j) % n

            // If we find an element greater than nums[i], this is the next greater
            if (nums[idx] > nums[i]) {
                res[i] = nums[idx]   // store next greater number
                break                 // stop searching once found
            } else {
                // If current nums[idx] is NOT greater,
                // we temporarily assume no greater element exists.
                // If a greater value is found later, this will be overwritten.
                res[i] = -1
            }
        }
    }

    return res
};
