var rearrangeArray = function (a) {
    // Extract all positive numbers from the array
    let positives = a.filter(x => x > 0);

    // Extract all negative numbers from the array
    let negatives = a.filter(x => x < 0);

    // Result array to store elements in alternating order
    let res = [];

    // Loop through positives (assumes positives and negatives have equal length)
    for (let i = 0; i < positives.length; i++) {
        // Push one positive and one negative element alternately
        res.push(positives[i], negatives[i]);
    }

    // Return the rearranged array
    return res;
};
