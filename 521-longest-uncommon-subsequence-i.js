// The problem asks for the length of the longest string that is a subsequence
// of exactly one of the two strings (a and b).

var findLUSlength = function (a, b) {

    // If the two strings are identical, then all subsequences of 'a'
    // are also subsequences of 'b', so there is NO uncommon subsequence.
    // In that case return -1.
    if (a === b) return -1;

    // Otherwise, the longer string itself is guaranteed to be an uncommon subsequence,
    // because the two strings differ — meaning at least one character differs.
    // So we simply return the longer length.
    return Math.max(a.length, b.length);
};


const findLUSlength222 = (a, b) =>
  a === b ? -1 : (a.length > b.length ? a.length : b.length);
