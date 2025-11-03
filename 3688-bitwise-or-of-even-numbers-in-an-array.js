/**
 * @param {number[]} nums - input array of integers
 * @return {number} - bitwise OR of all even numbers, or 0 if none
 */

let cl = console.log;

var evenNumberBitwiseORs = function (nums) {
    // Debug/logging line (optional)
    cl(nums);

    // Initialize result to 0
    // We'll accumulate all even numbers using bitwise OR
    let result = 0;

    // Loop through each number in the array
    for (let num of nums) {
        // Check if the number is even
        if (num % 2 === 0) {
            // Perform bitwise OR and store the result
            // result |= num is shorthand for result = result | num
            result |= num;
        }
    }

    // Return the final OR result
    // If there were no even numbers, result remains 0
    return result;
};
