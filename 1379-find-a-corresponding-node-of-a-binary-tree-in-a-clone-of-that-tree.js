var getTargetCopy = function (originalRoot, clonedRoot, targetNodeInOriginal) {

    // DFS that walks both trees simultaneously:
    //    o = node in original tree
    //    c = corresponding node in cloned tree
    function dfs(o, c) {
        // Base case: if the original node is null, no match here
        if (!o) return null;

        // If the current node in the original tree *is* the target,
        // then the corresponding cloned node `c` is the answer.
        if (o === targetNodeInOriginal) {
            return c;
        }

        // Recursively search the left subtree of both trees
        const lRes = dfs(o.left, c.left);

        // If a match was found on the left, return it immediately
        if (lRes) return lRes;

        // Otherwise search the right subtree
        const rRes = dfs(o.right, c.right);

        // Return whatever result was found (or null if none)
        return rRes;
    }

    // Start DFS from both roots simultaneously
    return dfs(originalRoot, clonedRoot);
};
