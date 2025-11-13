var unequalTriplets = function (nums) {
    // Get the total number of elements in the array
    let n = nums.length;

    // Initialize a counter for triplets where all three elements are distinct
    let ct = 0;

    // Iterate through all possible triplets (i, j, k)
    // with the condition i < j < k to avoid duplicates and maintain order
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            for (let k = j + 1; k < n; k++) {
                // Check if all three numbers in this triplet are different
                if (
                    (nums[i] !== nums[j]) && // i and j are not equal
                    (nums[i] !== nums[k]) && // i and k are not equal
                    (nums[j] !== nums[k])    // j and k are not equal
                ) {
                    // If all are distinct, count this triplet
                    ct++;
                }
            }

    // Return the total number of unequal triplets found
    return ct;
};
