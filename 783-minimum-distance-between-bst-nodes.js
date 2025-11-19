var minDiffInBST = function (root) {
    // Array to store the inorder sequence of node values
    let vals = [];

    // Inorder traversal (Left → Node → Right)
    // For a BST, this gives values in ascending order
    function dfs(n) {
        if (!n) return;

        dfs(n.left);
        vals.push(n.val);   // visit node
        dfs(n.right);
    }

    // Fill the vals array with sorted values
    dfs(root);

    // Now vals is sorted because it's an inorder traversal of a BST.
    // We only need to check differences between adjacent values.
    let minDiff = Infinity;

    for (let i = 1; i < vals.length; i++) {
        let [prev, curr] = [vals[i - 1], vals[i]];
        let diff = curr - prev;
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
};
