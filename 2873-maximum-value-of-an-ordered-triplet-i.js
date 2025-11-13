var maximumTripletValue = function (nums) {
    // Get the total number of elements in the array
    let n = nums.length;

    // Initialize the maximum triplet value to 0 (since result cannot be negative per problem constraints)
    let maxVal = 0;

    // Iterate through all possible triplets (i, j, k)
    // where i < j < k
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            for (let k = j + 1; k < n; k++) {
                // Compute the triplet value according to the given formula:
                // (nums[i] - nums[j]) * nums[k]
                let val = (nums[i] - nums[j]) * nums[k];

                // Update maxVal if this triplet gives a higher value
                maxVal = Math.max(maxVal, val);
            }

    // Return the maximum triplet value found
    return maxVal;
};
