var countValidSelections = function (a) {
    const n = a.length; // Length of the array

    // Get prefix sum and suffix sum arrays
    let [prefixSumArr, suffixSumArr] = getPrefixSuffixSumArr(a);

    let count = 0; // Counts total valid selections

    // Iterate through each index
    for (let i = 0; i < n; i++) {
        // Only consider positions where the value is 0
        if (a[i] === 0) {
            // Calculate absolute difference between left sum and right sum
            // Use 0 when index is out of bounds
            const diff = Math.abs(
                (prefixSumArr[i - 1] ?? 0) - (suffixSumArr[i + 1] ?? 0)
            );

            // If difference is 0, both selections are valid
            if (diff === 0) {
                count += 2;
            }
            // If difference is 1, only one selection is valid
            else if (diff === 1) {
                count += 1;
            }
        }
    }

    // Return total count of valid selections
    return count;
};

// Helper function to build prefix and suffix sum arrays
function getPrefixSuffixSumArr(a) {
    let n = a.length;

    let prefixSum = 0; // Running sum from the left
    let suffixSum = 0; // Running sum from the right

    let prefixSumArr = new Array(n); // Stores prefix sums
    let suffixSumArr = new Array(n); // Stores suffix sums

    // Compute prefix and suffix sums in a single loop
    for (let i = 0, j = n - 1 - i; i < n; i++, j--) {
        prefixSum += a[i];
        suffixSum += a[j];

        prefixSumArr[i] = prefixSum; // Sum of elements from index 0 to i
        suffixSumArr[j] = suffixSum; // Sum of elements from index j to n - 1
    }

    // Return both arrays
    return [prefixSumArr, suffixSumArr];
}
