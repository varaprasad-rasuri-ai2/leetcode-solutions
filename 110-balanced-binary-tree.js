var isBalanced = function (root) {
    // Flag to track whether the tree is balanced
    let balanced = true

    // Returns the height of a subtree rooted at n
    // While calculating height, it also checks balance
    function dfs(n) {
        // Height of an empty subtree is 0
        if (!n) return 0

        // Recursively compute heights of left and right subtrees
        let lRes = dfs(n.left)
        let rRes = dfs(n.right)

        // If the difference in heights exceeds 1, tree is unbalanced
        if (Math.abs(lRes - rRes) > 1) {
            balanced = false
        }

        // Height of current node = 1 + max height of children
        return 1 + Math.max(lRes, rRes)
    }

    // Trigger DFS from the root
    dfs(root)

    // Final result: whether the tree stayed balanced
    return balanced
};
