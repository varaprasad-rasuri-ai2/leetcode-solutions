let cl = console.log

var restoreString = function (s, indices) {
    cl(s.length, indices) // debug: prints string length and indices array

    let result = [] // array to hold characters in their new shuffled positions

    // Step 1️: Iterate through each character of the input string
    for (let i = 0; i < s.length; i++) {
        const targetIndex = indices[i] // the new index where s[i] should go
        result[targetIndex] = s[i]     // place the character in its new position
    }

    // Step 2️: Convert the result array back into a string
    // cl(result.join("")) // debug: see the final string before returning
    return result.join("") // join array characters into a single string
}
