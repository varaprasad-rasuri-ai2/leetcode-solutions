var hasTrailingZeros = function (nums) {
    let count = 0; // Counter for numbers that have at least one trailing zero
    
    for (let x of nums) { // Iterate through each number in the array
        if (!(x & 1)) {  // Check if the least significant bit is 0 (even number)
            count++;      // Increment counter if x has a trailing zero
            if (count >= 2) return true; // If at least two numbers have trailing zeros, return true
        }
    }
    
    return false; // Fewer than 2 numbers with trailing zeros → return false
};


var hasTrailingZeros222 = function (nums) {
    let evens = nums.filter(x => x % 2 === 0); // Filter out all even numbers
    return evens.length >= 2; // True if at least two even numbers exist
};
