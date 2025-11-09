var addedInteger = function (a, b) {
    let n = a.length
    a.sort((a, b) => a - b)
    b.sort((a, b) => a - b)

    return b.at(-1) - a.at(-1)
    // return b[0] - a[0]
};

var addedInteger222 = function (a, b) {
    return Math.min(...b) - Math.min(...a)
};

