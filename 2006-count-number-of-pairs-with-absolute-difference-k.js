var countKDifference = function (a, k) {
    let n = a.length; // Get the length of the array
    let count = 0;    // To store the total number of valid pairs

    // Loop over all pairs (i, j) where i < j
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Check if the absolute difference equals k
            if (Math.abs(a[i] - a[j]) === k) {
                count++; // If yes, increase the pair count
            }
        }
    }

    // Return the total number of pairs found
    return count;
};
