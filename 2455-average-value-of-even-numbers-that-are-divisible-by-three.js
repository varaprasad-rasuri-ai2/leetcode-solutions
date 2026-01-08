var averageValue = function (a) {
    let sum = 0;    // sum of elements divisible by 2 and 3
    let count = 0;  // count of such elements

    // iterate through each element in the array
    for (let e of a) {
        if (e % 2 === 0) {        // check if element is even
            if (e % 3 === 0) {    // check if element is divisible by 3
                sum += e;         // add to sum
                count++;          // increment count
            }
        }
    }

    if (count === 0) return 0;   // return 0 if no such element exists

    return Math.trunc(sum / count); // return truncated average
};
