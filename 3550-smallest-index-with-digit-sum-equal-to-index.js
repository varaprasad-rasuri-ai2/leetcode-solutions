/**
 * Helper function to calculate the sum of digits of a number.
 * Example: digitSum(123) -> 6
 */
function digitSum(x) {
    // Convert the number to a string, split into individual digits
    let digits = ('' + x).split("");

    // Convert each character back to a number and sum them up
    return digits.reduce((sum, ch) => sum + +ch, 0);
}

/**
 * @param {number[]} a
 * @return {number} - The smallest index i where digitSum(a[i]) == i, or -1 if none exist
 */
var smallestIndex = function (a) {
    // Loop through all elements in the array
    for (let i = 0; i < a.length; i++) {
        let x = a[i];

        // Compute the sum of digits for the current element
        let ds = digitSum(x);

        // If the digit sum equals the index, return this index
        if (ds === i) {
            return i; // Return immediately since we want the smallest index
        }
    }

    // If no such index is found, return -1
    return -1;
};
