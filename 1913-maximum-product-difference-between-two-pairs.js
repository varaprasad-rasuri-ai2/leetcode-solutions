// Function to compute the maximum product difference between two pairs in an array
// The goal: (largest1 * largest2) - (smallest1 * smallest2)
var maxProductDifference = function (a) {
    // Step 1: Sort the array in ascending order
    a.sort((a, b) => a - b)

    // Step 2: Take out the two largest numbers (from the end)
    let b1 = a.pop() // largest number
    let b2 = a.pop() // second largest number

    // Step 3: Take out the two smallest numbers (from the beginning)
    let s1 = a.shift() // smallest number
    let s2 = a.shift() // second smallest number

    // Step 4: Compute and return the product difference
    // (product of largest two) - (product of smallest two)
    return b1 * b2 - s1 * s2
};
