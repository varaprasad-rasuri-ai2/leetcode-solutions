var searchBST = function (root, targetVal) {

    // Recursive DFS search in a Binary Search Tree
    function dfs(n) {
        // If we hit a null node, the value is not in the tree
        if (!n) return null;

        // If the current node matches the target, return it
        if (n.val === targetVal) {
            return n;
        } 
        // If target is larger, search in the right subtree
        else if (n.val < targetVal) {
            return dfs(n.right);
        } 
        // If target is smaller, search in the left subtree
        else {
