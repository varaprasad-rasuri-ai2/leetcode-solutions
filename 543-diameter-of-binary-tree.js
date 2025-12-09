var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0; // Tracks the maximum diameter found

    // DFS helper function: returns the height of the current node
    function dfs(node) {
        if (!node) return -1; // base case: null nodes have height -1

        // Leaf node check is optional; height computation works without it,
        // but keeping it for clarity
        if (!node.left && !node.right) return 0; // height of a leaf node

        // Recursively compute heights of left and right subtrees
        let leftHeight = dfs(node.left);
        let rightHeight = dfs(node.right);

        // Diameter through this node = leftHeight + rightHeight + 2 edges
        let diameter = leftHeight + rightHeight + 2;
        maxDiameter = Math.max(maxDiameter, diameter); // update global maximum

        // Return height of this node: max height of subtrees + 1
        return Math.max(leftHeight, rightHeight) + 1;
    }

    dfs(root); // start DFS from root
    return maxDiameter; // final diameter
};
