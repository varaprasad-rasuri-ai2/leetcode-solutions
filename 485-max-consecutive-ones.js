// Shortcut for console.log (useful for debugging)
let cl = console.log

// Function to find the maximum number of consecutive 1s in an array
var findMaxConsecutiveOnes = function (n) {
    // Length of the array
    let len = n.length

    // Variable to store the maximum consecutive 1s found
    let max = 0

    // Counter to track the current streak of consecutive 1s
    let count = 0

    // Loop through the array
    // Note: i <= len works because n[len] is undefined
    // and will reset the count at the end
    for (let i = 0; i <= len; i++) {
        // If the current element is 1, increase the count
        if (n[i] === 1) {
            count++
            // Update max if the current streak is larger
            max = Math.max(max, count)
        } else {
            // Reset count when a 0 or undefined is encountered
            count = 0
        }
    }

    // Return the maximum consecutive 1s
    return max
};
