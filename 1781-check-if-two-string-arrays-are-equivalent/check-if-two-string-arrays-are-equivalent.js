var arrayStringsAreEqual = function (words1, words2) {
    let s1 = words1.reduce((fullStr, w) => fullStr + w, '')
    let s2 = words2.reduce((fullStr, w) => fullStr + w, '')
    return s1 === s2
};
