var isSameTree = function (proot, qroot) {

    // Recursively compare nodes of both trees
    function dfs(p, q) {
        // If both nodes are null, trees match at this branch
        if (!p && !q) return true

        // If one is null and the other is not, trees differ
        if (p && !q) return false
        if (!p && q) return false

        // If both exist but values differ, trees differ
        if (p.val !== q.val) return false

        // Recursively compare left and right subtrees
        let lRes = dfs(p.left, q.left)
        let rRes = dfs(p.right, q.right)

        // Both subtrees must match
        return lRes && rRes
    }

    // Start comparison from both roots
    return dfs(proot, qroot)
};
