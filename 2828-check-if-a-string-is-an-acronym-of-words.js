// Function to check if a given string `s` is an acronym of the array of words `words`
var isAcronym = function (words, s) {
    // Initialize an empty string to build the acronym
    let t = ''
    
    // Loop through each word in the `words` array
    for (let w of words) {
        // Append the first character of each word to the string `t`
        t += w[0]
    }

    // Compare the constructed acronym `t` with the given string `s`
    // If they are identical, return true; otherwise, false
    return t === s
};
