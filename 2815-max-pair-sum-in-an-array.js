// Return the largest digit in a number.
// Example: 582 → 8
const getLargestDigit = (n) => {
    return [...('' + n)]                  // convert number → array of digit chars
        .reduce((max, chDigit) =>
            Math.max(max, +chDigit), 0);  // compare and keep the largest digit
};

var maxSum = function (a) {
    let n = a.length;

    // Group numbers by their largest digit.
    // Example:
    //   a = [51, 71, 17, 24, 42]
    //   f = {
    //       5: [51],      largest digit = 5
    //       7: [71, 17],  largest digit = 7
    //       4: [24, 42]   largest digit = 4
    //   }
    let f = {};
    a.forEach((x) => {
        let l = getLargestDigit(x);   // compute largest digit of x
        f[l] = f[l] ?? [];            // initialize bucket if needed
        f[l].push(x);                 // add number to its bucket
    });

    // Track the maximum possible sum of two numbers
    // that share the same largest digit.
    let max = -1;

    // For each bucket grouped by largest digit
    for (let [largestDigit, nums] of Object.entries(f)) {

        // Sort numbers descending so the two largest are at index 0 and 1
        nums.sort((a, b) => b - a);

        // Only valid if there are at least two numbers in the bucket
        if (nums.length >= 2) {
            let s = nums[0] + nums[1];   // sum of top 2
            max = Math.max(max, s);      // update global maximum
        }
    }

    // If no valid pair exists, return -1 (as required)
    return max;
};


