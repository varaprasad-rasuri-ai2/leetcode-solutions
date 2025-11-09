var separateDigits = function (a) {
    // Initialize an empty array to store the separated digits
    let res = [];

    // Iterate through each number in the input array
    for (let x of a) {
        // Convert the number 'x' to a string
        // so we can loop through each character (digit)
        for (let ch of ('' + x)) {
            // Convert each character back to a number and push into result
            res.push(+ch);
        }
    }

    // Return the final array of digits
    return res;
};
