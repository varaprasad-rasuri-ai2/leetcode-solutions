var permute = function(nums) {
    let res = []

    function backtrack(i) {
        if (i === nums.length) {
            res.push([...nums])
            return
        }

        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]]  // swap
            backtrack(i + 1)
            [nums[i], nums[j]] = [nums[j], nums[i]]  // swap back
        }
    }

    backtrack(0)
    return res
}


var permute333 = function(nums) {
    let res = []

    function backtrack(path, used) {
        if (path.length === nums.length) {
            res.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue   // skip used elements

            used[i] = true
            path.push(nums[i])

            backtrack(path, used)

            path.pop()
            used[i] = false
        }
    }

    backtrack([], Array(nums.length).fill(false))
    return res
}


var permute2222 = function (nums) {
    let res = []
    let visited = new Set()   // <- Not needed for this problem, but prevents re-visiting same path
                              //    This approach still works but is extra.

    function search(path) {
        let key = path.join("-")    // unique representation of current path

        if (visited.has(key)) return
        visited.add(key)

        // If path length is equal to nums length, we found one permutation
        if (path.length === nums.length) {
            res.push([...path])     // push a COPY of path
        }

        // Try each number that is not yet included
        for (let x of nums) {
            if (!path.includes(x)) {  // check if x is already used
                path.push(x)          // choose
                search(path)          // explore
                path.pop()            // un-choose (backtrack)
            }
        }
    }

    search([])
    return res
};
