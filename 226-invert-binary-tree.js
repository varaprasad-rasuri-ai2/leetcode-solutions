let cl = console.log;

var invertTree = function (root) {

    // DFS helper to invert the tree
    function dfs(node) {
        cl({ node });               // Debug: show the current node being processed

        // Base case: if the node is null, nothing to invert
        if (!node) return;

        // Swap the left and right child references
        [node.left, node.right] = [node.right, node.left];

        // Recursively invert the left and right subtrees
        dfs(node.left);
        dfs(node.right);
    }

    // Start DFS inversion from the root
    dfs(root);

    // Return the root of the inverted tree
    return root;
};
