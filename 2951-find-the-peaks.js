var findPeaks = function (a) {
    let n = a.length          // length of the array
    let res = []              // array to store the indices of peaks

    // iterate from the second element to the second-last element
    for (let i = 1; i <= n - 2; i++) {
        // check if the current element is greater than both neighbors
        if ((a[i - 1] < a[i]) && (a[i] > a[i + 1])) {
            res.push(i)       // add the index of the peak to the result array
        }
    }

    return res               // return array of indices where peaks occur
};
