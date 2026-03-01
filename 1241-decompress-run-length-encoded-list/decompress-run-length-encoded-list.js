var decompressRLElist = function (nums) {
    let n = nums.length
    let res = []
    for (let i = 0; i < n; i += 2) {
        let [f, v] = [nums[i], nums[i + 1]]
        while (f--) {
            res.push(v)
        }
    }
    return res
};
