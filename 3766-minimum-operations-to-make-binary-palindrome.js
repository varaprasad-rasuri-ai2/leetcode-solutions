// Check whether the binary representation of a number is a palindrome
const isPalindrome = (n) => {
    // Convert number to binary string
    let binaryStr = n.toString(2);

    // Reverse the binary string
    let binaryStrRev = binaryStr.split("").reverse().join("");

    // Compare original and reversed binary string
    return binaryStr === binaryStrRev;
};

var minOperations = function (nums) {
    let res = [];

    // For each number in the array
    for (let x of nums) {
        // Try increasing "count" until a palindrome exists
        for (let count = 0; ; count++) {

            // Check if subtracting or adding count produces a palindromic binary number
            if (
                isPalindrome(x - count) ||  // check lower neighbor
                isPalindrome(x + count)     // check upper neighbor
            ) {
                // Record the minimum count needed to reach a binary palindrome
                res.push(count);
                break; // stop as soon as the first match is found
            }
        }
    }

    
    return res; // array of minimum operations for each number
};


