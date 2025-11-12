// Function to simulate a "number game" between Alice and Bob
// Given an array of numbers `a`, the game works as follows:
// 1. Sort the numbers in ascending order.
// 2. Alice and Bob alternately take the smallest available numbers.
// 3. The result records Bob's pick first, then Alice's.
var numberGame = function (a) {
    // Step 1: Sort the array in ascending order
    a.sort((a, b) => a - b)

    // Step 2: Initialize an empty array to store the result sequence
    let res = []

    // Step 3: Continue while there are numbers left in the array
    while (a.length) {
        // Alice picks the smallest number (first in the sorted list)
        let alice = a.shift()

        // Bob picks the next smallest number
        let bob = a.shift()

        // Step 4: According to the game rule, Bob's number is placed before Alice's
        res.push(bob, alice)
    }

    // Step 5: Return the final sequence after all numbers are picked
    return res
};
