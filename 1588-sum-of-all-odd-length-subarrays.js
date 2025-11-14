// Function to calculate the sum of all odd-length subarrays in `arr`
var sumOddLengthSubarrays = function (arr) {
    // Length of the array
    let n = arr.length

    // Variable to accumulate the sum of all odd-length subarrays
    let sumOfOddLen = 0

    // Outer loop: iterate over every possible starting index of a subarray
    for (let i = 0; i < n; i++) {
        let sum = 0  // To store the sum of the current subarray

        // Inner loop: iterate over the subarray that starts at index i and extends to the right
        for (let j = i; j < n; j++) {
            // Add the current element to the sum of the subarray
            sum += arr[j]

            // Check if the current subarray has an odd length
            // (The length of a subarray from i to j is (j - i + 1), and we want odd lengths)
            // A subarray has odd length if (j - i) is even, because:
            // (j - i + 1) = odd → j - i is even
            if ((j - i) % 2 === 0) {
                // Add the sum of this odd-length subarray to the total sum
                sumOfOddLen += sum
            }
        }
    }

    // Return the total sum of all odd-length subarrays
    return sumOfOddLen
};
