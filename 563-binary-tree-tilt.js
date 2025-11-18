var findTilt = function (root) {
    // Accumulates the total tilt of the entire tree
    let sum = 0

    // Returns the sum of values in the subtree rooted at n
    // While calculating subtree sums, it also adds each node's tilt to `sum`
    function dfs(n) {
        // Empty subtree has sum = 0
        if (!n) return 0

        // Recursively compute left and right subtree sums
        let lRes = dfs(n.left)
        let rRes = dfs(n.right)

        // Tilt of current node = |left subtree sum - right subtree sum|
        sum += Math.abs(lRes - rRes)

        // Return total subtree sum including current node
        return lRes + rRes + n.val
    }

    // Begin DFS from root
    dfs(root)

    // Total tilt of the whole tree
    return sum
};
