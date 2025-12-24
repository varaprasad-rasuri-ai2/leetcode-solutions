/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return             -1 if num is higher than the picked number
 *                      1 if num is lower than the picked number
 *                      0 if num is equal to the picked number
 * var guess = function(num) {}
 */

// Example (for understanding only):

// This is hidden in LeetCode
/*
var guess = function(num) {
    if (num > pickedNumber) return -1;
    if (num < pickedNumber) return 1;
    return 0;
};
*/

var guessNumber = function (n) {
    // Lower bound of the search range
    let lo = 1;

    // Upper bound of the search range
    let hi = n;

    // Binary search within the range [lo, hi]
    while (lo <= hi) {
        // Find the middle of the current range
        const mid = Math.trunc((lo + hi) / 2);

        // Call the guess API to compare mid with the picked number
        let pick = guess(mid);

        // If mid is the correct number, return it
        if (pick === 0) {
            return mid;
        }
        // If mid is lower than the picked number, search the right half
        else if (pick === 1) {
            lo = mid + 1;
        }
        // If mid is higher than the picked number, search the left half
        else {
            hi = mid - 1;
        }
    }

    // This line should never be reached if the picked number is valid
    return -1;
};
