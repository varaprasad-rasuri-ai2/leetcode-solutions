var minimumPairRemoval = function (a) {
    let n = a.length

    let minSum = undefined
    let minSumI = undefined
    let found = true
    let mergeCount = 0
    let isSorted
    while (found) {
        found = false
        isSorted = true
        minSum = 2_000_000_000
        minSumI = 2_000_000_000
        for (let i = 1; i < n; i++) {
            if (a[i - 1] > a[i]) isSorted = false
            let sum = a[i - 1] + a[i]
            if (sum < minSum) {
                minSum = sum
                minSumI = i
                found = true
            }
        }
        if (isSorted) break
        if (found) {
            a[minSumI - 1] += a[minSumI]
            a.splice(minSumI, 1)
            mergeCount++
        }
    }
    return mergeCount
};
