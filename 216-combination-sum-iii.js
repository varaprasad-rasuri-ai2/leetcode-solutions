var combinationSum3 = function (k, target) {
    let n = 10
    let res = []
    let visited = new Set()

    function search(pos, path, sum) {
        let key = path.join("-")
        if (visited.has(key)) return
        visited.add(key)

        if (path.length === k) {
            if (sum === target) {
                res.push([...path])
                return
            }
        }
        if (path.length > k) {
            return
        }
        if (sum > target) {
            return
        }

        for (let i = pos; i < n; i++) {
            // if (path.at(-1) > a[i]) continue

            // take
            path.push(i)
            search(i + 1, path, sum + i)
            path.pop()

            // not take
            search(i + 1, path, sum)
        }
    }

    search(1, [], 0)
    return res
};


var combinationSum355555 = function(k, target) {

    // The allowed digits are 1 through 9
    let n = 9;

    // Result array to store all valid combinations
    let res = [];

    function search(pos, path, sum) {

        // -----------------------------
        // Base case 1: valid combination
        // -----------------------------
        // If we've chosen exactly k numbers and the sum matches target
        if (path.length === k && sum === target) {
            res.push([...path]); // Push a copy of path into results
            return;              // Stop exploring this branch
        }

        // -----------------------------
        // Base case 2: prune impossible branches
        // -----------------------------
        // If we already have k numbers but sum != target, stop
        if (path.length >= k) return;

        // If sum exceeds target, stop early
        if (sum > target) return;

        // -----------------------------
        // Recursive exploration
        // -----------------------------
        // Try every number from current position to 9
        // Using pos ensures:
        // 1. Numbers are increasing
        // 2. Each number is used at most once
        for (let i = pos; i <= n; i++) {
            // Choose i
            path.push(i);

            // Recurse: move to next number (i+1) and add i to sum
            search(i + 1, path, sum + i);

            // Undo choice (backtrack)
            path.pop();
        }
    }

    // Start DFS/backtracking from 1, with empty path and sum = 0
    search(1, [], 0);

    // Return all valid combinations found
    return res;
};
