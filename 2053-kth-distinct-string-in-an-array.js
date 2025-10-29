// Helper function to count frequencies of elements in an array
function getFreq(sOra) {
    let o = {};
    for (let x of sOra) {
        // For each string, increment its count or initialize it to 1
        o[x] = (o[x] ?? 0) + 1;
    }
    return o; // Return the frequency map
}

var kthDistinct = function (a, k) {
    let r = [];               // To store all distinct strings
    let o = getFreq(a);       // Get frequency of each string

    // Iterate over the array in *original order*
    for (let x of a) {
        // If the string appears only once, it's distinct
        if (o[x] === 1) {
            r.push(x);
        }
    }

    // Return the kth distinct string (1-based index)
    // If fewer than k distinct strings exist, return empty string
    return r[k - 1] ?? '';
};
