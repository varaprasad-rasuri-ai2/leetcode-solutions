var isSumEqual = function (firstWord, secondWord, targetWord) {

    // Helper function to convert a word into its “numeric value”
    // Each character contributes: charCode - charCode('a')
    // Example: "acb" -> "021" -> number 21
    let value = word => {
        let str = '';

        for (let char of word) {
            // Convert character to its alphabetical index (a = 0, b = 1, ...)
            str += char.charCodeAt(0) - 'a'.charCodeAt(0);
        }

        // Convert the concatenated string digits to a number
        return +str;
    };

    // Check if firstWord + secondWord equals targetWord numerically
    return value(firstWord) + value(secondWord) === value(targetWord);
};
