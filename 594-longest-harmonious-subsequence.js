var findLHS = function (a) {
    // Sort the array in ascending order
    a.sort((a, b) => a - b);

    // Create a frequency map to count occurrences of each number
    let freq = {};
    for (let e of a) {
        freq[e] = (freq[e] ?? 0) + 1;
    }

    // Variable to store the maximum length of a harmonious subsequence
    let maxTotal = 0;

    // Variable to keep track of the previous unique number
    let prev;

    // Create a Set to get unique sorted elements
    let set = new Set(a);

    // Iterate through each unique element
    for (let e of set) {
        // Check if there is a previous element
        if (prev !== undefined) {
            // Check if the current element and previous element differ by exactly 1
            if (prev + 1 === e) {
                // Calculate total count of the harmonious pair
                let total = (freq[prev] ?? 0) + freq[e];

                // Update the maximum length found so far
                maxTotal = Math.max(maxTotal, total);
            }
        }
        // Update previous element
        prev = e;
    }

    // Return the maximum length of a harmonious subsequence
    return maxTotal;
};


var findLHS222 = function(nums) {
    // Map to store frequency of each number
    let map = new Map();

    // Variable to store the maximum length of harmonious subsequence
    let max = 0;

    // Count occurrences of each number
    for (let n of nums) {
        map.set(n, (map.get(n) || 0) + 1);
    }

    // Iterate through each unique number and its frequency
    for (let [key, val] of map) {
        // Check if the next consecutive number exists
        if (map.has(key + 1)) {
            // Calculate total length of the harmonious subsequence
            max = Math.max(max, val + map.get(key + 1));
        }
    }

    // Return the maximum harmonious subsequence length
    return max;
};
