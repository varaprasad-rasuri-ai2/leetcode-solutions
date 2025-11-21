var majorityElement = function (arr) {
    let n = arr.length;
    let moreThanHalf = Math.trunc(n / 2) + 1; 
    // minimum occurrences needed to be a majority element

    let o = {}; // frequency map

    for (let x of arr) {
        // Increase the count of element x
        o[x] = (o[x] ?? 0) + 1;

        // If x already appears more than n/2 times, return it immediately
        if (o[x] >= moreThanHalf) {
            return x;
        }
    }
};
