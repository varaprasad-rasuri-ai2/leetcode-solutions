let cl = console.log
var largestInteger = function (nums, k) {

    // Total length of the array
    let numsLen = nums.length

    // Map to store:
    // key   -> number from nums
    // value -> how many subarrays of size k contain this number
    let numsFreq = new Map()

    // Stores the final answer (largest valid integer)
    let result = -1

    // Iterate over all possible starting indices of subarrays of size k
    for (let i = 0; i <= numsLen - k; i++) {

        // Set to track unique numbers in the current subarray
        // (prevents counting duplicates within the same window)
        let numPresent = new Set()

        // Build the current subarray of size k
        for (let j = i; j < i + k; j++) {
            numPresent.add(nums[j])
        }

        // Update frequency:
        // each number is counted once per subarray
        for (let n of numPresent) {
            numsFreq.set(n, (numsFreq.get(n) ?? 0) + 1)
        }
    }

    // Find the largest number that appears
    // in exactly one subarray of size k
    for (let [n, c] of numsFreq) {
        if (c === 1) {
            result = Math.max(result, n)
        }
    }

    // Return the result (or -1 if none found)
    return result
};
