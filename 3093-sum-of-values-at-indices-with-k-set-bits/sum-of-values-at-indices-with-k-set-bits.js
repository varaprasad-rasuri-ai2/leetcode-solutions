let cl = console.log

var getSetBitCount = function (n) {
    let count = 0
    for (let i = 0; i < 32; i++) {
        if (n & (1 << i)) {
            count++
        }
    }
    return count
};

var sumIndicesWithKSetBits = function (a, k) {
    let n = a.length
    // cl({ n })
    let sum = 0
    for (let i = 0; i < n; i++) {
        let setBitCount = getSetBitCount(i)
        if (setBitCount === k) {
            sum += a[i]
        }
    }
    return sum
};
