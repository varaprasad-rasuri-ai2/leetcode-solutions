var countAsterisks = function (s) {
    let sum = 0;  // Initialize a counter for the '*' characters

    // Split the string by '|' characters
    // This creates an array where:
    // - Even indices (0, 2, 4, ...) are outside '|' pairs
    // - Odd indices (1, 3, 5, ...) are inside '|' pairs
    let a = s.split("|");

    // Loop over every even-indexed element (outside '|' pairs)
    for (let i = 0; i < a.length; i += 2) {
        let w = a[i]; // Take the substring outside '|' pair

        // Loop through each character of the substring
        for (let ch of w) {
            if (ch === '*') sum++; // Count '*' characters
        }
    }

    return sum; // Return the total count of '*' outside '|'
};
