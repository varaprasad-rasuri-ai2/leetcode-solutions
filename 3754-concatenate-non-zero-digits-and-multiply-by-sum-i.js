var sumAndMultiply = function (n) {
    let s = '' + n; // convert number to string to access each digit

    let sum = 0;              // stores sum of non-zero digits
    let concatinatedStr = ''; // stores concatenation of non-zero digits

    // iterate over each digit character
    for (let digitChar of s) {
        // ignore zero digits
        if (digitChar !== '0') {
            sum += +digitChar;          // add digit to sum
            concatinatedStr += digitChar; // append digit to string
        }
    }

    // convert concatenated string to number and multiply by sum
    return +concatinatedStr * sum;
};
