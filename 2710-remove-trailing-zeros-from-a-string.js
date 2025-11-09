var removeTrailingZeros = function (s) {
    let a = s.split("")  // Convert string to array of characters

    // Keep removing the last character while it is '0'
    while (a.at(-1) === '0') {
        a.pop()
    }

    return a.join("")  // Convert array back to string
};
