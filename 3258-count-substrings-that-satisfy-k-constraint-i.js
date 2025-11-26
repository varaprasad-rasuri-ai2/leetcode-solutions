var countKConstraintSubstrings = function (s, k) {
    // Helper function: checks whether the substring's frequency counts
    // satisfy the k-constraint
    // A substring is valid if the number of '0's <= k OR number of '1's <= k
    const satisfiesConstraint = (freq, k) => 
        freq['0'] <= k || freq['1'] <= k;

    const n = s.length;
    const freq = { 0: 0, 1: 0 };  // frequency of characters in the window
    let sum = 0;
    let l = 0; // left pointer of sliding window

    // Iterate over right pointer `r`
    for (let r = 0; r < n; r++) {
        const rChar = s[r];
        freq[rChar] = freq[rChar] + 1; // expand window

        // Shrink the window until it satisfies the k-constraint
        while (!satisfiesConstraint(freq, k)) {
            const lChar = s[l];
            freq[lChar] = freq[lChar] - 1;
            l++;
        }

        // Every substring ending at r and starting from any index in [l..r]
        // is valid → add the window size
        const len = r - l + 1;
        sum += len;
    }

    return sum;
};
