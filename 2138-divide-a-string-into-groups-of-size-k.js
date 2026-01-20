var divideString = function (s, k, fillChar) {
    // Array to store the resulting substrings
    let res = [];

    // Loop through the string in steps of size k
    for (let i = 0; i < s.length; i += k) {
        // Extract a substring of length up to k
        let ss = s.slice(i, i + k);

        // Pad the substring with fillChar if its length is less than k
        ss = ss.padEnd(k, fillChar);

        // Add the processed substring to the result array
        res.push(ss);
    }

    // Return the array of divided strings
    return res;
};
