// Reverses the digits of a number and converts the result back to a number
const reverseNum = (n) =>
    +(('' + n).split("").reverse().join(""));

// Checks whether a number remains the same
// after reversing it twice
var isSameAfterReversals = function (num) {
    // Reverse the number twice and compare with the original
    return reverseNum(reverseNum(num)) === num;
};
