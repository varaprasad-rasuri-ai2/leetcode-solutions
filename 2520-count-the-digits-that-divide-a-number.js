// Function to count how many digits in 'num' divide 'num' evenly
var countDigits = function (num) {
    /*
        Example: num = 123
        '' + num          → '123'         // Convert number to string
        ...('' + num)     → '1','2','3'   // Spread string into individual characters
        [...('' + num)]   → ['1','2','3'] // Create an array of characters
        .map(x => +x)     → [1, 2, 3]     // Convert each character back to a number
    */
    let digits = [...('' + num)].map(x => +x) // Get all digits as an array of numbers

    let count = 0 // Initialize counter for divisible digits

    // Loop through each digit
    for (let d of digits) {
        // If 'num' is divisible by this digit (no remainder)
        if (num % d === 0) {
            count++ // Increase the count
        }
    }

    // Return the total number of digits that divide 'num'
    return count
};
