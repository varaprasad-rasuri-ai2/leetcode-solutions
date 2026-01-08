// Function to calculate sum and product of digits of a number
var getSumAndProductOfDigits = function (n) {
    let sumOfDigits = 0;      // initialize sum
    let productOfDigits = 1;  // initialize product

    // process each digit of n
    while (n) {
        let rem = n % 10;            // get last digit
        sumOfDigits += rem;          // add digit to sum
        productOfDigits *= rem;      // multiply digit to product
        n = Math.trunc(n / 10);      // remove last digit
    }

    // return both sum and product as an object
    return { sumOfDigits, productOfDigits };
};

// Function to check if n is divisible by (sum of digits + product of digits)
var checkDivisibility = function (n) {
    // get sum and product of digits
    let { sumOfDigits, productOfDigits } = getSumAndProductOfDigits(n);

    // return true if n is divisible by sum + product, else false
    return n % (sumOfDigits + productOfDigits) === 0;
};
