// Function to find the permutation difference between two strings
var findPermutationDifference = function (s, t) {
    // Step 1: Get the length of the strings (both have same length)
    let n = s.length;

    // Step 2: Initialize a variable to store the total difference
    let sum = 0;

    // Step 3: Loop through each character in string s
    for (let i = 0; i < n; i++) {
        // Find the index of the same character in string t
        let j = t.indexOf(s[i]);

        // Add the absolute difference between their indices
        // Math.abs() ensures we always add a positive value
        sum += Math.abs(j - i);
    }

    
    // Step 4: Return the total permutation difference
    return sum;
};
