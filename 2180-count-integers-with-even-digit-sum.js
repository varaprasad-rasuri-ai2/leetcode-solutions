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

// Function to count numbers from 1 to num with even sum of digits
var countEven = function (num) {
    let count = 0; // counter for numbers with even sum of digits

    // iterate through numbers from 1 to num
    for (let n = 1; n <= num; n++) {
        let { sumOfDigits } = getSumAndProductOfDigits(n); // get sum of digits
        count += sumOfDigits % 2 === 0; // increment if sum is even
    }

    return count; // return total count
};
