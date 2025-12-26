var checkString = function(s) {
    // If "ba" exists, it means a 'b' appears before an 'a'
    return !s.includes("ba");
};

var checkString222 = function (s) {
    // Flag to track whether 'b' has appeared
    let seenB = false;

    // Traverse each character in the string
    for (let ch of s) {
        // Once 'b' is seen, mark the flag
        if (ch === 'b') {
            seenB = true;
        }
        // If 'a' appears after a 'b', order is violated
        else if (ch === 'a' && seenB) {
            return false;
        }
    }

    // All 'a's appear before any 'b'
    return true;
};
