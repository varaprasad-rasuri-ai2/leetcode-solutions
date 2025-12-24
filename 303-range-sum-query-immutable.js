// NumArray class supports efficient range sum queries
class NumArray {
    // This array will store prefix sums
    prefixSum = []

    // Constructor receives the input array `a`
    constructor(a) {
        let n = a.length

        // Variable to keep track of cumulative sum
        let sum = 0

        // Local array to build prefix sums
        let prefixSum = []

        // Build the prefix sum array
        // prefixSum[i] = a[0] + a[1] + ... + a[i]
        for (let i = 0; i < n; i++) {
            sum = sum + a[i]
            prefixSum.push(sum)
        }

        // Store the prefix sum array in the object
        this.prefixSum = prefixSum
    }

    // Returns the sum of elements from index `left` to `right` (inclusive)
    sumRange(left, right) {
        // If left > 0, subtract prefixSum[left - 1]
        // If left == 0, use 0 (handled by ?? 0)
        return this.prefixSum[right] - (this.prefixSum[left - 1] ?? 0)
    }
};
