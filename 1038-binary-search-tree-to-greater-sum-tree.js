/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    // This variable keeps track of the running sum
    // of all node values greater than the current node
    let sum = 0;

    // Reverse inorder traversal: Right -> Node -> Left
    function dfs(node) {
        // Base case: if node is null, return
        if (!node) return;

        // First, visit the right subtree (greater values)
        dfs(node.right);

        // Add current node's value to the running sum
        sum += node.val;

        // Update the current node's value
        node.val = sum;

        // Then, visit the left subtree (smaller values)
        dfs(node.left);
    }

    // Start DFS from the root
    dfs(root);

    // Return the modified tree
    return root;
};
