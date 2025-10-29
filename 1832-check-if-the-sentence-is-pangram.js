var checkIfPangram = function (sentence) {
    let set = new Set(sentence)
    return set.size === 26
};
