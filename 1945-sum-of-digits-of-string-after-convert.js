// Convert a string into its "lucky number" representation
var getLucky = function (s, k) {
    // Length of the input string
    let sLen = s.length;

    // Step 1: Convert each character to its position in the alphabet
    // Example: "abc" → "123"
    let convertedNum = '';
    for (let i = 0; i < sLen; i++) {
        convertedNum += (s[i].charCodeAt(0) - 96);  // 'a' is 97 → 1, 'b' is 98 → 2
    }

    // Step 2: Convert to lucky number by summing digits k times
    let numStr = convertedNum;
    for (let j = 0; j < k; j++) {
        let sum = 0;

        // Sum each character digit
        for (let digit of numStr) {
            sum += Number(digit);
        }

        // Update the number string for the next iteration
        numStr = sum.toString();
    }

    // Return the final integer result
    return Number(numStr);
};

// let cl = console.log
var getLucky222 = function (s, k) {

    // Store the length of the input string
    let sLen = s.length

    // Convert each character to its alphabet position and concatenate
    // Example: "abc" → "123"
    let convertedNum = ''

    for (let i = 0; i < sLen; i++) {
        // charCodeAt(0) gives ASCII value; subtract 96 to convert 'a' → 1, 'b' → 2, etc.
        convertedNum += s[i].charCodeAt(0) - 96
    }

    // This will hold the current numeric string for digit-sum operations
    let numStr = convertedNum

    // Repeat the digit-sum process k times
    for (let j = 0; j < k; j++) {
        let sum = 0

        // Sum the digits of the current number string
        for (let digit of numStr) {
            sum += (+digit)   // Convert character to number using unary +
        }

        // Convert the sum back to a string for the next iteration
        numStr = sum.toString()
    }

    // Convert the final numeric string to a number and return it
    return +numStr
};



