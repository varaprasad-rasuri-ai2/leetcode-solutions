// Returns the minimum number of deci-binary numbers needed
// to sum up to the given number n
var minPartitions = function (n) {
    // Convert the number to a string
    let s = '' + n;

    // Split the string into individual characters
    // and convert each character to a number
    let a = s.split("").map(ch => +ch);

    // The maximum digit in the number determines
    // the minimum number of deci-binary partitions
    return Math.max(...a);
};
