var numOfStrings = function (patterns, word) {
    let cc = 0
    for (let p of patterns) {
        if (word.includes(p)) {
            cc++
        }
    }
    return cc
};
