var sumCounts = function (nums) {
    let count = 0;           // total sum of squares
    let len = nums.length;

    // Iterate over all possible starting indices of subarrays
    for (let i = 0; i < len; i++) {
        let visited = new Set();  // set to store distinct elements in current subarray

        // Iterate over all subarrays starting at index i
        for (let j = i; j < len; j++) {   // FIX: use j < len
            visited.add(nums[j]);         // add current element to the set
            let distinct = visited.size;  // number of distinct elements in subarray nums[i..j]
            count += distinct * distinct; // add square of distinct count
        }
    }

    return count;
};
