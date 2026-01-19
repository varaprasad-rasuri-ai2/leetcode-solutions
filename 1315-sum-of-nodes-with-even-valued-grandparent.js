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
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    // This variable will store the final sum
    let sum = 0;

    // Depth-First Search helper function
    // node: current node being visited
    // parent: parent of the current node
    // grandparent: grandparent of the current node
    function dfs(node, parent, grandparent) {
        // Base case: if the node is null, stop recursion
        if (!node) return;

        // If grandparent exists and its value is even,
        // add the current node's value to the sum
        if (grandparent && grandparent.val % 2 === 0) {
            sum += node.val;
        }

        // Recursively visit the left child
        // Current node becomes the parent,
        // Parent becomes the grandparent
        dfs(node.left, node, parent);

        // Recursively visit the right child
        // Current node becomes the parent,
        // Parent becomes the grandparent
        dfs(node.right, node, parent);
    }

    // Start DFS traversal from the root
    // Root has no parent or grandparent
    dfs(root, null, null);

    // Return the computed sum
    return sum;
};
