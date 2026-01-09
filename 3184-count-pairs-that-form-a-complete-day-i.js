// Counts the number of pairs (i, j) such that the sum of hours[i] and hours[j]
// is a multiple of 24 (i.e., forms a complete day)
var countCompleteDayPairs = function (hours) {
    // Total number of elements
    let n = hours.length;

    // Counter for valid pairs
    let count = 0;

    // Iterate over all unique pairs (i < j)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Check if the sum of the pair is divisible by 24
            if ((hours[i] + hours[j]) % 24 === 0) {
                count++;
            }
        }
    }

    // Return the total number of valid pairs
    return count;
};
