var maxScore = function (s) {
    const n = s.length; // Length of the binary string

    let prefixZerosCount = 0; // Counts zeros from the left
    let suffixOnesCount = 0;  // Counts ones from the right

    // Arrays to store prefix zero counts and suffix one counts
    const prefixZerosCountArr = new Array(n);
    const suffixOnesCountArr = new Array(n);

    // Build prefix zeros count and suffix ones count in one pass
    for (let i = 0; i < n; i++) {
        // Count number of '0's from the start up to index i
        prefixZerosCount += (s[i] === "0" ? 1 : 0);
        prefixZerosCountArr[i] = prefixZerosCount;

        // Count number of '1's from the end down to index (n - 1 - i)
        suffixOnesCount += (s[n - 1 - i] === "1" ? 1 : 0);
        suffixOnesCountArr[n - 1 - i] = suffixOnesCount;
    }

    let max = 0; // Stores the maximum score

    // Try every possible split point (excluding the last character)
    for (let i = 0; i < n - 1; i++) {
        // Score = zeros on the left + ones on the right
        const sum = prefixZerosCountArr[i] + suffixOnesCountArr[i + 1];
        max = Math.max(max, sum); // Update max score
    }

    // Return the maximum score found
    return max;
};
