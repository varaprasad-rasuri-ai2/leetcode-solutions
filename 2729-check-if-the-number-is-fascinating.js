var isFascinating = function (n) {
    // concatenate n, 2n, and 3n as a single string
    let s = '' + n + 2 * n + 3 * n;

    // create a set to track unique digits
    let set = new Set(s);

    // fascinating numbers should not contain digit '0'
    if (set.has('0')) return false;

    // digits 1–9 must appear exactly once
    return s.length === 9 && set.size === 9;
};
