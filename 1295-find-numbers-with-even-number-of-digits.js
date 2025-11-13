var findNumbers = function (nums) {
    let n = nums.length;       // Get the length of the array (not strictly needed)
    let numOfEvens = 0;        // Initialize counter for numbers with even digits

    // Loop through each number in the array
    for (let num of nums) {
        // Convert the number to a string to count its digits
        // Check if the number of digits is even
        if ((num.toString().length) % 2 === 0) {
            numOfEvens++;      // Increment counter if number has even digits
        }
    }

    // Return the total count of numbers with even number of digits
    return numOfEvens;
};
