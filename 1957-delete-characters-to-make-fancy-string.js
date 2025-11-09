var makeFancyString = function (s) {
    let t = ''           // result string to build the "fancy" version
    let prev             // to store the previous character
    let cc = 0           // counter for consecutive occurrences

    for (let ch of s) {
        // If current char is the same as previous, increment count
        if (ch === prev) {
            cc++
        } else {       // otherwise, reset count to 1
            cc = 1
        }

        // Append character only if it occurs less than 3 times consecutively
        if (cc < 3) {
            t += ch
        }

        prev = ch       // update previous character
    }

    return t             // return the "fancy" string
};
