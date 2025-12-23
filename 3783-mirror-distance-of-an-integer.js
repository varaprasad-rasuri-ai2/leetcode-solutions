// Function to calculate the mirror distance of a number
// Mirror distance = absolute difference between the number
// and its reversed form
var mirrorDistance = function (n) {
    // Reverse the digits of n and find the absolute difference
    return Math.abs(n - reverse(n));
};

// Helper function to reverse the digits of a number
let reverse = function (x) {
    // Stores the reversed number
    let reversed = 0;

    // Loop until all digits are processed
    while (x > 0) {
        // Get the last digit of x and add it to reversed
        reversed = reversed * 10 + (x % 10);

        // Remove the last digit from x
        x = Math.floor(x / 10);
    }

    // Return the reversed number
    return reversed;
};
