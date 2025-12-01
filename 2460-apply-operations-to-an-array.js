var applyOperations = function (nums) {
    let a = nums;
    let n = a.length;

    // -------------------------------------------------------
    // Phase 1: Apply operations from i = 0 to n-2
    // If a[i] == a[i+1], double a[i] and set a[i+1] = 0
    // -------------------------------------------------------
    for (let i = 0; i + 1 < n; i++) {
        if (a[i] === a[i + 1]) {
            a[i] *= 2;    // Double the current element
            a[i + 1] = 0; // Remove the next identical element
        }
    }

    // -------------------------------------------------------
    // Phase 2: Move all zeros to the end (stable order)
    //
    // Your approach:
    // Use two pointers:
    //   i → finds the first zero
    //   j → finds the next non-zero after i
    // Then swap them, and repeat.
    //
    // This effectively "bubbles" non-zero values forward.
    // -------------------------------------------------------
    while (true) {

        // Find index i of first zero
        let i = 0;
        while (i < n && a[i] !== 0) i++;

        // No zero found → array already compacted
        if (i >= n) break;

        // Find index j of next non-zero after i
        let j = i + 1;
        while (j < n && a[j] === 0) j++;

        // If no non-zero found after i → done
        if (j >= n) break;

        // Swap a[i] (zero) with a[j] (non-zero)
        [a[j], a[i]] = [a[i], a[j]];
    }

    return a;
};


var applyOperations2222 = function(nums) {
    let n = nums.length;

// Operations
    for (let i = 0; i + 1 < n; i++) {
        if (nums[i] === nums[i+1]) {
            nums[i] *= 2;
            nums[i+1] = 0;
        }
    }

    // Keep non-zero numbers in order
    let nonZero = nums.filter(x => x !== 0);
    // Count zeros
    let zeros = Array(n - nonZero.length).fill(0);

    return [...nonZero, ...zeros];
};



