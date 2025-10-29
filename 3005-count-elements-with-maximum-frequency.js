// Helper function to count frequency of each number
function getFreq(arr) {
    const freq = {};
    for (let x of arr) {
        freq[x] = (freq[x] ?? 0) + 1; // Increment count
    }
    return freq;
}

var maxFrequencyElements = function (nums) {
    const freq = getFreq(nums); // Count frequencies
    const maxFreq = Math.max(...Object.values(freq)); // Find maximum frequency
    let total = 0;

    // Sum frequencies of all elements that have the maximum frequency
    for (let count of Object.values(freq)) {
        if (count === maxFreq) total += count;
    }

    return total;
};
