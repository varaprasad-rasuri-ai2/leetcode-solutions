var removeZeros = function (n) {
    // Step 1: Convert the number to a string
    const s = ('' + n)
        // Step 2: Remove all occurrences of "0" using replaceAll
        .replaceAll("0", "");

    // Step 3: Convert the string back to a number and return it
    return +s;
};
