var recoverFromPreorder = function (s) { 
    // Global index pointer into the traversal string
    let i = 0;

    /**
     * dfs(D) attempts to read a node at depth D
     * If the next part of the string does not match depth D,
     * we return null (meaning no node here).
     */
    function dfs(D) {
        // j is a temporary pointer used to validate depth
        let j = i;
        let dashes = D;

        // Try to consume exactly D dashes
        // Each dash indicates one level of depth
        while (dashes-- && s[++j] == "-");

        // If we failed to match D dashes or reached end of string,
        // then there is no node at this depth
        if (dashes > 0 || j >= s.length) {
            return null;
        }

        // Extract the numeric value of the node
        let num = "";
        while (j < s.length && s[j] != "-") {
            num += s[j];
            j++;
        }

        // Update global index to the position after the number
        i = j;

        // Create the current tree node
        let r = new TreeNode(+num);

        // Preorder DFS:
        // First attempt to build the left child
        r.left = dfs(D + 1);

        // Then attempt to build the right child
        r.right = dfs(D + 1);

        return r;
    }

    // Start DFS from depth 0 (root)
    return dfs(0);
};
