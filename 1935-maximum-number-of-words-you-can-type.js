var canBeTypedWords = function (text, brokenLetters) {
    let set = new Set(brokenLetters);
    let words = text.split(' ');

    let count = 0;
    for_loop_for_words: for (let w of words) {
        for (let ch of w) {
            if (set.has(ch)) {
                continue for_loop_for_words;
            }
        }
        count++;
    }
    return count;
};

var canBeTypedWords222 = function (text, brokenLetters) {
    let set = new Set(brokenLetters)
    let words = text.split(" ")

    let count = 0
    for (let w of words) {
        let good = 1
        for (let ch of w) {
            if (set.has(ch)) {
                good = 0
                break
            }
        }
        if (good) count++
    }
    return count
};
