var evaluateTree = function (root) {

    // Depth-first recursive function to evaluate the tree
    function dfs(n) {
        // If node is null (should not happen in valid input), return sentinel
        if (!n) return -1

        // If leaf node, its value is either 0 or 1 — return it directly
        if (!n.left && !n.right) {
            return n.val
        }

        // Recursively evaluate left and right subtrees
        let lRes = dfs(n.left)
        let rRes = dfs(n.right)

        // Internal nodes: val = 2 means OR, val = 3 means AND
        if (n.val === 2) {
            return lRes | rRes      // boolean OR
        } else {
            return lRes & rRes      // boolean AND
        }
    }

    // Start DFS from root
    return dfs(root)
};
