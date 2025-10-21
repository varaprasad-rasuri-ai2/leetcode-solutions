var numIdenticalPairs = function (nums) {
    // Step 1: Initialize a variable to count the number of good pairs
    let count = 0;
    
    // Step 2: Use two nested loops to compare every possible pair (i, j)
    // The outer loop picks the first element
    for (let i = 0; i < nums.length; i++) {

        // The inner loop picks the second element
        // Start from i + 1 because we only consider pairs where i < j
        for (let j = i + 1; j < nums.length; j++) {

            // Step 3: If the two numbers are equal, it's a "good pair"
            if (nums[i] === nums[j]) {
                // Increment the count for each matching pair
                count = count + 1;
            }
        }
    }

    // Step 4: After checking all pairs, return the total count
    return count;
};
