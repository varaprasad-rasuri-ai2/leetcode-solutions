// Function to find the smallest positive integer that is a multiple of both 2 and n
var smallestEvenMultiple = function (n) {
    // Start checking from 1 upwards
    for (let i = 1; ; i++) {
        
        // If 'i' is divisible by both 2 and n
        if ((i % 2 === 0) && (i % n === 0)) {
            // Return the first such number (the smallest multiple)
            return i;
        }
    }
};


// A more efficient version that checks only even numbers
var smallestEvenMultiple222 = function (n) {

    // Start from 2 and increment by 2 each time (so only even numbers are checked)
    for (let i = 2; ; i += 2) {
        // If 'i' is divisible by n, it must also be a multiple of 2
        if (i % n === 0) {
            // Return the smallest even multiple of n
            return i;
        }
    }
};
