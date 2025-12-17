let cl = console.log; // Short alias for console.log (used for debugging)

// Function to check if a number n is strictly palindromic
var isStrictlyPalindromic = function (n) {
    // Loop through all bases from 2 up to n-2 (inclusive)
    for (let b = 2; b <= n - 2; b++) {
        // Convert n to a string in base `b`
        let str = n.toString(b);

        // Check if the string is a palindrome by comparing it to its reverse
        if (str !== str.split('').reverse().join('')) {
            // If any representation is not a palindrome, return false immediately
            return false;
        }
    }

    // If all base representations are palindromes, return true
    return true;
};

// Example usage (debugging):
// cl(isStrictlyPalindromic(4)); // false
