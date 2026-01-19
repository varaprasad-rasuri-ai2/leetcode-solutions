
var balanceBST = function(root) {

    // Step 1: Collect all values from the BST in sorted order
    const vals = [];

    // In-order DFS traversal to collect node values
    function dfsCollectValsFromBST(n) {
        if (!n) return;

        dfsCollectValsFromBST(n.left);   // Visit left subtree
        vals.push(n.val);                // Add current node value
        dfsCollectValsFromBST(n.right);  // Visit right subtree
    }

    dfsCollectValsFromBST(root);

    // Step 2: Build a balanced BST from sorted values
    // Using indices instead of array slices for efficiency
    function dfsCreateBST(lo, hi) {
        // Base case: no elements to include
        if (lo > hi) return null;

        // Find middle index
        const mid = Math.trunc((lo + hi) / 2);

        // Create node with middle value
        const n = new TreeNode(vals[mid]);

        // Recursively build left subtree from left half
        n.left = dfsCreateBST(lo, mid - 1);

        // Recursively build right subtree from right half
        n.right = dfsCreateBST(mid + 1, hi);

        return n;
    }

    // Build BST from entire sorted array
    const balancedRoot = dfsCreateBST(0, vals.length - 1);

    return balancedRoot;
};
