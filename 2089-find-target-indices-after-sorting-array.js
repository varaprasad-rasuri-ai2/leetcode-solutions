var targetIndices = function (a, t) {
    let n = a.length

    // Sort array in non-decreasing order
    a.sort((a, b) => a - b)

    let res = []

    // Iterate through sorted array to collect indices equal to target
    for (let i = 0; i < n; i++) {
        if (a[i] === t) {
            res.push(i)
        }
    }

    return res
};
