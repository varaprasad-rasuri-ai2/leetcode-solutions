/**
 * @param {string[]} sentences - Array of sentences (each sentence is a string)
 * @return {number} - The maximum number of words in any single sentence
 */
var mostWordsFound = function (sentences) {
    // Array to store the word counts for each sentence
    let wordsCountInSentences = [];

    // Iterate through each sentence in the input array
    for (s of sentences) {
        // Split the sentence by spaces to get individual words,
        // then push the count of words to the array
        wordsCountInSentences.push(s.split(" ").length);
    }

    // Return the maximum word count found in the array
    return Math.max(...wordsCountInSentences);
};
