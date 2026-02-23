// Prefix Sum approach
var runningSum = function (nums) {
    // Step 1: Create an empty array to store running sums
    let result = [];

    // Step 2: Initialize a variable to keep track of the cumulative sum
    let sum = 0;

    // Step 3: Loop through each number in the input array
    for (let x of nums) {
        // Add the current number to the cumulative sum
        sum += x;

        // Push the current cumulative sum into the result array
        result.push(sum);
    }



    // Step 4: Return the final running sum array
    return result;
};
