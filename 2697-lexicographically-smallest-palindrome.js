var makeSmallestPalindrome = function (s) {
    // Convert the string into an array of characters
    // (strings are immutable in JavaScript)
    let a = [...s];

    // Use two pointers: one from the start (i) and one from the end (j)
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {

        // If left character is smaller, replace the right character
        // to make the palindrome lexicographically smaller
        if (a[i] < a[j]) {
            a[j] = a[i];

        // If right character is smaller, replace the left character
        } else if (a[i] > a[j]) {
            a[i] = a[j];
        }
        // If both characters are equal, no change is needed
    }

    // Convert the character array back into a string and return it
    return a.join("");
};
