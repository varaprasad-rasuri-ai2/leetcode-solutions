var findWordsContaining = function (words, char) {
    let result = []
    
    words.forEach((word, i) => {
        if (word.includes(char)) {
            result.push(i)
        }
    })

    return result
};
