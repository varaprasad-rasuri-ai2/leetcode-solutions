var maxDepth = function (root) {
    let maxd = 0; // will store the deepest depth found

    function dfs(node, depth) {
        if (!node) return; // base case: empty node

        // update global max depth
        maxd = Math.max(maxd, depth);
         // if (d > maxd) {
         //      maxd = d
         //  }

        // recursively visit each child
        for (let child of node.children) {
            dfs(child, depth + 1); // child is one level deeper
        }
    }

    dfs(root, 1); // start DFS from root at depth 1
    return maxd;
};
