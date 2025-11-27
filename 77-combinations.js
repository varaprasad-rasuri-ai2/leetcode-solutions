var combine = function(n, k) {
    let res = [];
    function backtrack(start, path) {
        if (path.length === k) {
            res.push([...path]);
            return;
        }

        for (let i = start; i <= n; i++) {
            path.push(i);
            backtrack(i + 1, path);
            path.pop();
        }
    }
    backtrack(1, []);
    return res;
};



var combine222 = function (n, k) {
    let res = []                      // result container
    let visited = new Set()           // used to avoid revisiting the same path (NOT needed)

    function search(pos, path) {
        let key = path.join("-")      // create a string key for the current combination
        if (visited.has(key)) return  // skip if already visited
        visited.add(key)

        if (path.length === k) {      // if combination length == k → store it
            res.push([...path])
            // Return is NOT placed here, so recursion continues unnecessarily
        }

        for (let i = pos; i <= n; i++) {
            // choose i
            path.push(i)
            search(i + 1, path)
            path.pop()

            // not choose i (this creates redundant paths)
            search(i + 1, path)
        }
    }

    search(1, [])
    return res
};
