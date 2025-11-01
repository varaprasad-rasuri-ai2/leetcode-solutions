var reverseWords = function (s) {
    // Split the sentence into individual words using space as a separator
    let words = s.split(' ');

    // Initialize an array to store the reversed words
    let result = [];

    // Loop through each word in the words array
    for (word of words) {
        // Split the word into characters, reverse the array, and join back into a string
        result.push(word.split('').reverse().join(''));
    }

    // Join all the reversed words back into a single string with spaces
    return result.join(' ');
};
