// Helper function to count the frequency of each number
function getFreq(arr) {
    const freq = {};
    for (let x of arr) {
        freq[x] = (freq[x] ?? 0) + 1;
    }
    return freq;
}

var numberOfPairs = function (nums) {
    const freq = getFreq(nums);
    let totalPairs = 0;
    let leftovers = 0;

    // Count pairs and leftovers for each unique number
    for (let count of Object.values(freq)) {
        totalPairs += Math.floor(count / 2); // number of pairs
        if (count % 2 === 1) leftovers += 1; // leftover if odd
    }

    return [totalPairs, leftovers];
};
