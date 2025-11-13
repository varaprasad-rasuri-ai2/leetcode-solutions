// Helper function: returns a frequency object (character → count)
function getFreqObj(s) {
    let f = {};
    // Loop through each character in the string
    for (let ch of s) {
        // Increment the count for the character, defaulting to 0 if not seen before
        f[ch] = (f[ch] ?? 0) + 1;
    }
    return f;
}

var commonChars = function (words) {
    // Number of words in the input array
    let n = words.length;

    // Step 1: Build an array of frequency objects for each word
    let freqObjArr = [];
    for (let w of words) {
        freqObjArr.push(getFreqObj(w));
    }

    // Step 2: Initialize an array to store the common characters
    let res = [];

    // Step 3: Iterate through the first word's character frequencies
    // We'll use it as a reference to find common letters in all words
    for (let [char1, freq1] of Object.entries(freqObjArr[0])) {
        // Start with the frequency of this character in the first word
        let minFreq = freq1;

        // Compare its frequency with the same character in every other word
        for (let i = 1; i < n; i++) {
            let freqObjectI = freqObjArr[i];
            // Get the frequency of the current character in the i-th word (or 0 if not found)
            let freqI = freqObjectI[char1];
            // Track the minimum frequency across all words
            minFreq = Math.min(minFreq, freqI ?? 0);
        }

        // Step 4: If the character appears in all words, add it `minFreq` times to the result
        while (minFreq--) {
            res.push(char1);
        }
    }

    // Step 5: Return the list of characters common to all words
    return res;
};
