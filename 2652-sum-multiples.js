// Function to calculate the sum of all numbers from 1 to n
// that are divisible by 3, 5, or 7
var sumOfMultiples = function (n) {
    let sum = 0 // Initialize a variable to keep track of the total sum

    // Loop through all numbers from 1 up to n (inclusive)
    for (let i = 1; i <= n; i++) {

        // Check if the current number is divisible by 3, 5, or 7
        if (
            (i % 3 === 0) ||  // divisible by 3
            (i % 5 === 0) ||  // divisible by 5
            (i % 7 === 0)     // divisible by 7
        ) {
            sum += i // Add it to the total sum if the condition is true
        }
    }

    
    // After the loop, return the total sum of all qualifying numbers
    return sum
};
