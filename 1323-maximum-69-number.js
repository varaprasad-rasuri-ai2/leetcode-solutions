// Function to get the maximum number by changing at most one digit (6 → 9)
var maximum69Number = function (num) {
    // Step 1: Convert the number into a string
    // Example: 9669 → "9669"
    let s = '' + num

    // Step 2: Replace the *first* occurrence of '6' with '9'
    // String.replace() only replaces the first match by default
    // Example: "9669" → "9969"
    return +s.replace('6', '9') // Step 3: Convert the string back to a number
};
