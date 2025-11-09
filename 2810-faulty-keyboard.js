var finalString = function (s) {
    // Use an array to efficiently build and modify the resulting string.
    // (Arrays are faster for repeated reversals and concatenations than strings.)
    let res = [];

    // Loop through each character in the input string
    for (let ch of s) {
        // When the character is 'i', reverse the current result
        if (ch === 'i') {
            res.reverse();
        } 
        // Otherwise, just append the character to the end
        else {
            res.push(ch);
        }
    }

    // Join the array back into a single string and return it
    return res.join("");
};
