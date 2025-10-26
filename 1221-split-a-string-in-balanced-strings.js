// Function to find the maximum number of balanced substrings
// A balanced string has equal numbers of 'L' and 'R'
var balancedStringSplit = function (s) {
    // 'count' will store how many balanced substrings we can make
    let count = 0;

    // 'balanceCount' tracks the difference between number of 'R's and 'L's
    // If balanceCount = 0 → it means we have equal L and R so far
    let balanceCount = 0;

    // Loop through each character in the string
    for (let ch of s) {
        // If we see 'R', increase the balance by 1
        // If we see 'L', decrease the balance by 1
        balanceCount += (ch === 'R') ? 1 : -1;

        // When balanceCount becomes 0, we found a balanced substring
        if (balanceCount === 0) {
            count++; // Increment our count of balanced strings
        }
    }

    // Return the total number of balanced substrings found
    return count;
};
