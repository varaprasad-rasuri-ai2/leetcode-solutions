var lengthOfLastWord = function (s) {
    // Split by spaces (creates empty strings for multiple spaces)
    const words = s.split(' ').filter((x) => x.length > 0);

    // Return the length of the last non-empty word
    return words.at(-1).length;
}


var lengthOfLastWord222 = function (s) {
    // Remove only trailing spaces; internal spaces remain
    const words = s.trimRight().split(' ');

    // The last element is the last word
    return words.at(-1).length;
}
