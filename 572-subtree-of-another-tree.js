// Helper function: checks if two trees are identical
var dfsIsSameTree = function(p, q) {
    // Both nodes are null → trees match at this path
    if (!p && !q) return true;

    // One node is null, the other is not → trees differ
    if (p && !q) return false;
    if (!p && q) return false;

    // Node values differ → trees differ
    if (p.val !== q.val) return false;

    // Recursively check left and right subtrees
    let leftMatch = dfsIsSameTree(p.left, q.left);
    let rightMatch = dfsIsSameTree(p.right, q.right);

    // Both left and right subtrees must match
    return leftMatch && rightMatch;
};

// Main function: checks if subRoot is a subtree of root
var isSubtree = function(root, subRoot) {
    let candidates = []; // nodes in root where values match subRoot root

    // DFS to find all nodes in root that could be the root of a matching subtree
    function dfs(node) {
        if (!node) return;

        // Node value matches subRoot's root → candidate for subtree
        if (node.val === subRoot.val) {
            candidates.push(node);
        }

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    // Check all candidate nodes using dfsIsSameTree
    for (let node of candidates) {
        if (dfsIsSameTree(node, subRoot)) {
            return true; // found matching subtree
        }
    }

    return false; // no matching subtree found
};

