var getMinimumDifference = function (root) {
    // Array to store values in sorted order after inorder traversal
    let vals = [];

    // Inorder traversal (Left → Node → Right)
    // For a BST, this produces values in ascending order
    function dfs(n) {
        if (!n) return;

        dfs(n.left);
        vals.push(n.val);   // Visit current node
        dfs(n.right);
    }

    // Perform inorder traversal to fill `vals`
    dfs(root);

    // Now `vals` contains all node values in sorted order.
    // The minimum absolute difference must be between adjacent elements.
    let minDiff = Infinity;

    for (let i = 1; i < vals.length; i++) {
        let prev = vals[i - 1];
        let curr = vals[i];
        let diff = curr - prev;
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
};
