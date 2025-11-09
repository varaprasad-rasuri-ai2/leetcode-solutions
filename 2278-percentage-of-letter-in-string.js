var percentageLetter = function (s, letter) {
    let total = s.length        // total number of characters in the string

    let letterCount = 0         // counter for occurrences of the target letter
    for (let ch of s) {         // loop through each character in the string
        if (ch === letter) {    // check if the current character matches the target letter
            letterCount++       // increment the counter if it matches
        }
    }

    // Calculate the percentage of the letter in the string and truncate decimal part
    return Math.trunc((letterCount / total) * 100)
};
