var maxFreqSum = function (s) {
    let vowelCharCountObj = {        /* 'a': 0 */ }
    let consonentCharCountObj = {    /* 'b' : 0 */ }
    for (let char of s) {
        if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
            // vowel
            vowelCharCountObj[char] = (vowelCharCountObj[char] ?? 0) + 1
        } else {
            consonentCharCountObj[char] = (consonentCharCountObj[char] ?? 0) + 1
        }
    }
    let vfmax = 0
    let vvals = Object.values(vowelCharCountObj)
    if (vvals.length) vfmax = Math.max(...vvals)

    let cfmax = 0
    let cvals = Object.values(consonentCharCountObj)
    if (cvals.length) cfmax = Math.max(...cvals)
    
    return vfmax + cfmax
};
