// Helper function to count how many times each number appears
function getFreq(arr) {
    let freq = {};
    for (let x of arr) {
        freq[x] = (freq[x] ?? 0) + 1; // Increment frequency for each number
    }
    return freq;
}

var uniqueOccurrences = function (a) {
    // Step 1: Get frequency of each number
    let freq = getFreq(a);

    // Step 2: Extract only the occurrence counts
    let vals = Object.values(freq);

    // Step 3: Create a Set from the counts (removes duplicates automatically)
    let set = new Set(vals);

    // Step 4: If all frequencies are unique,
    //         the Set size should equal the number of total frequency values
    return vals.length === set.size;
};
