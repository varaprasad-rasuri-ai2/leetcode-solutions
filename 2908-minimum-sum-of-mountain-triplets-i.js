var minimumSum = function (nums) {
    // Get the number of elements in the array
    let n = nums.length;

    // Initialize the minimum sum to Infinity (acts as a sentinel value)
    let minSum = Infinity;

    // Iterate through all possible triplets (i, j, k) where i < j < k
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            for (let k = j + 1; k < n; k++) {
                // Check if nums[j] is strictly greater than both nums[i] and nums[k]
                // This forms a valid "mountain" shape: nums[i] < nums[j] > nums[k]
                if (
                    (nums[i] < nums[j]) &&
                    (nums[k] < nums[j])
                ) {
                    // Calculate the sum of the triplet
                    let sum = nums[i] + nums[j] + nums[k];

                    // Update minSum if this triplet gives a smaller valid sum
                    minSum = Math.min(minSum, sum);
                }
            }

    // If no valid triplet was found, return -1; otherwise, return the smallest sum
    return minSum === Infinity ? -1 : minSum;
};
