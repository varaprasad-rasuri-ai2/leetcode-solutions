var sumOfTheDigitsOfHarshadNumber = function (x) {
    let sum = 0;

    // Convert the number to a string so we can iterate through each digit
    for (let ch of x.toString()) {
        // Convert the character back to a number and add it to sum
        sum += parseInt(ch);
    }

    // If x is divisible by the sum of its digits, return the sum; otherwise, return -1
    return x % sum === 0 ? sum : -1;
};
