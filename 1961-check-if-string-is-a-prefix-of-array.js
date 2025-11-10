var isPrefixString = function (s, words) {
    let t = '' // to accumulate concatenated words

    for (let w of words) {
        t += w // add current word to the prefix
        if (!s.startsWith(t)) {
            // if accumulated string t is not a prefix of s, return false early
            return false
        }
        if (t === s) {
            // if accumulated string equals s, we found the prefix
            return true
        }
    }

    // if loop finishes without matching s exactly, return false
    return false
};
