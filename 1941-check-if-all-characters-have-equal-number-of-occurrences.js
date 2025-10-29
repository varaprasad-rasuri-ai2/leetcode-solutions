// Helper function to count how many times each character appears
function getFreq(str) {
    let freq = {};
    for (let ch of str) {
        freq[ch] = (freq[ch] ?? 0) + 1; // Increment character count
    }
    return freq;
}

var areOccurrencesEqual = function (s) {
    // Step 1: Get frequency of each character
    let freq = getFreq(s);

    // Step 2: Extract all frequency values and store them in a Set
    // (A Set removes duplicates automatically)
    let set = new Set(Object.values(freq));

    // Step 3: If all frequencies are the same, the Set will have only 1 value
    return set.size === 1;
};
