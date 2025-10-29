// Helper function to count word frequencies
function getFreq(words) {
    let freq = {};
    for (let word of words) {
        freq[word] = (freq[word] ?? 0) + 1; // Count each word
    }
    return freq;
}

var uncommonFromSentences = function (s1, s2) {
    // Step 1: Combine both sentences and split into individual words
    let words = (s1 + " " + s2).split(" ");

    // Step 2: Count how many times each word appears
    let freq = getFreq(words);

    // Step 3: Collect all words that appear exactly once
    let res = [];
    for (let [word, count] of Object.entries(freq)) {
        if (count === 1) res.push(word);
    }

    // Step 4: Return the list of uncommon words
    return res;
};
