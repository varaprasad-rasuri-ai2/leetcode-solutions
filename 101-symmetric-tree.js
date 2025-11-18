var isSymmetric = function (root) {
    // An empty tree is symmetric
    if (!root) return true

    // Recursively check whether two subtrees are mirror images
    function dfs(p, q) {
        // If both nodes are null, this pair is symmetric
        if (!p && !q) return true

        // If one node is null but the other isn't, not symmetric
        if (p && !q) return false
        if (!p && q) return false

        // Values must match to be symmetric
        if (p.val !== q.val) return false

        // Check mirror structure:
        //   left subtree of p vs right subtree of q
        //   right subtree of p vs left subtree of q
        let lRes = dfs(p.left, q.right)
        let rRes = dfs(p.right, q.left)

        // Both sides must be mirror-matching
        return lRes && rRes
    }

    // Start by comparing left and right children of the root
    return dfs(root.left, root.right)
};
