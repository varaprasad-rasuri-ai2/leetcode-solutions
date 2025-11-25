// Helper function: sum all digits of n
function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;       // add last digit
        n = Math.trunc(n / 10); // remove last digit
    }
    return sum;
}

// Main function
var addDigits = function(num) {
    // Repeat summing digits until number is a single digit
    while (num > 9) {
        num = sumOfDigits(num);
    }
    return num;
};
