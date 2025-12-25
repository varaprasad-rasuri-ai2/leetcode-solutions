function getPrefixsuffixSumArr(a) {
    let n = a.length;

    let prefixSum = 0; // Running sum from the left
    let suffixSum = 0; // Running sum from the right (not used later, but computed here)

    let prefixSumArr = new Array(n); // Stores prefix sums
    let suffixSumArr = new Array(n); // Stores suffix sums

    // Build prefix and suffix sum arrays in a single loop
    for (let i = 0, j = n - 1 - i; i < n; i++, j--) {
        prefixSum += a[i];
        suffixSum += a[j];

        prefixSumArr[i] = prefixSum; // Sum of elements from index 0 to i
        suffixSumArr[j] = suffixSum; // Sum of elements from index j to n - 1
    }

    // Return both prefix and suffix sum arrays
    return [prefixSumArr, suffixSumArr];
}

var answerQueries = function (a, queries) {
    const n = a.length; // Number of elements in the array

    // Sort the array in ascending order
    a.sort((a, b) => a - b);

    // Compute prefix sum array (only prefix sums are needed here)
    let [prefixSumArr] = getPrefixsuffixSumArr(a);

    // For each query, find the maximum number of elements
    // whose sum is less than or equal to maxSum
    return queries.map((maxSum) => {
        // Linear scan to find the first prefix sum that exceeds maxSum
        for (let i = 0; i < n; i++) {
            if (prefixSumArr[i] > maxSum) {
                return i; // Count of elements that can be taken
            }
        }
        // If all prefix sums are within maxSum, return full length
        return n;
    });
};
