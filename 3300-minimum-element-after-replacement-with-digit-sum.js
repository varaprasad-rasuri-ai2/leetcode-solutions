function sumOfDigits(n) {
    let s = 0;
    while (n) {
        let lastD = n % 10;          // Extract the last digit
        s += lastD;                  // Add it to the running sum
        n = Math.trunc(n / 10);      // Remove the last digit
    }
    return s;                        // Return the sum of digits
}

var minElement = function (a) {
    let min = Infinity;              // Initialize minimum as infinity
    for (let x of a) {               // Iterate through all numbers
        min = Math.min(min, sumOfDigits(x));  // Compare digit sum with current min
    }
    return min;                      // Return smallest digit sum found
};
