var subsets222 = function (nums) {
    let n = nums.length
    let res = []
    let visited = new Set()

    function search(pos, path) {
        let key = path.join("-")
        if (visited.has(key)) return   // This should not be needed
        visited.add(key)

        res.push([...path])            // Every prefix is a valid subset

        for (let i = pos; i < n; i++) {
            // take nums[i]
            path.push(nums[i])
            search(i + 1, path)
            path.pop()

            // not take nums[i]
            search(i + 1, path)        // ❌ redundant: loop already does this
        }
    }

    search(0, [])
    return res
};


var subsets = function(nums) {
    let res = [];

    
    function backtrack(start, path) {
        res.push([...path]);     // record current subset

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);  // choose
            backtrack(i + 1, path);
            path.pop();          // unchoose
        }
    }

    backtrack(0, []);
    return res;
};
