var divideArray = function(nums) {
    const freq = new Map();
    for (let n of nums) {
        freq.set(n, (freq.get(n) || 0) + 1);
    }
    for (let count of freq.values()) {
        if (count % 2 !== 0) return false;
    }
    return true;
};
