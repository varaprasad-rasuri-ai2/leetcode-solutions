// Helper function to count the frequency of each number in the array
function getFreq(arr) {
    let freq = {};
    for (let x of arr) {
        freq[x] = (freq[x] ?? 0) + 1; // Increment count for each number
    }
    return freq;
}

var frequencySort = function (a) {
    // Step 1: Count frequency of each element
    let f = getFreq(a);

    // Step 2: Sort the array based on rules:
    //   1️⃣ Increasing order of frequency  -> f[a] - f[b]
    //   2️⃣ For equal frequency, decreasing order of value -> b - a
    a.sort((a, b) => f[a] - f[b] || b - a);

    // Step 3: Return sorted array
    return a;
};
