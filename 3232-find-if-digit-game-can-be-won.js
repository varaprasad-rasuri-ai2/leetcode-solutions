// Function to determine if Alice can win
// Alice wins if the sum of the single-digit numbers is greater than the sum of double-digit numbers
// or the sum of double-digit numbers is greater than the sum of single-digit numbers.
var canAliceWin = function (nums) {

    // Initialize sums for single-digit and double-digit numbers
    let singleDigitSum = 0
    let doubleDigitSum = 0

    // Loop through the array `nums`
    for (let n of nums) {
        // If the number is a single-digit (0-9), add it to `singleDigitSum`
        if (n <= 9) {
            singleDigitSum += n
        } else {
            // Otherwise, add it to `doubleDigitSum`
            doubleDigitSum += n
        }
    }

    // Alice wins if either:
    // - The sum of single-digit numbers is greater than the sum of double-digit numbers
    // - OR the sum of double-digit numbers is greater than the sum of single-digit numbers
    return singleDigitSum > doubleDigitSum || doubleDigitSum > singleDigitSum
};
