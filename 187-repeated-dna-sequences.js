var findRepeatedDnaSequences = function (s) {
    // Length of the input DNA string
    let n = s.length;

    // Set to store sequences we've already seen once
    let vis = new Set();

    // Set to store sequences that appear more than once
    let dups = new Set();

    // Slide a window of length 10 across the string
    for (let i = 0; i + 10 <= n; i++) {
        // Extract the 10-letter DNA substring starting at index i
        let ss = s.slice(i, i + 10);

        // If the substring hasn't been seen before, record it
        if (!vis.has(ss)) {
            vis.add(ss);
        } else {
            // If we've seen it before, it's a duplicate
            dups.add(ss);
        }
    }

    // Convert the set of duplicates to an array and return
    return [...dups];
};
