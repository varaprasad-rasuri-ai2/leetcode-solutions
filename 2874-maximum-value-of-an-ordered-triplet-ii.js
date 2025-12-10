var maximumTripletValue = function (nums) {
    let a = nums;
    let n = a.length;

    // Build a suffix array where suffixMaxArr[i] = max value in nums[i..end]
    // This lets us query the "best possible k > j" in O(1)
    let rMax = -Infinity;
    let suffixMaxArr = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        rMax = Math.max(a[i], rMax);
        suffixMaxArr[i] = rMax;
    }

    let max = 0;

    // Track the maximum value to the LEFT of j
    let lMax = -Infinity;

    // j is the middle index: we want i < j < k
    for (let j = 1; j < n - 1; j++) {
        // Update the left max (best i < j)
        lMax = Math.max(lMax, a[j - 1]);

        // Compute the triplet value for this j:
        // (best left - middle) * (best right)
        max = Math.max(max, (lMax - nums[j]) * suffixMaxArr[j + 1]);
    }

    return max;
};
