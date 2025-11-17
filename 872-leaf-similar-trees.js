let cl = console.log;

var leafSimilar = function (root1, root2) {
    cl({ root1, root2 });

    // --------------------------------------------
    // DFS helper function that collects LEAF values
    // --------------------------------------------
    function dfs(node, lfNode) {
        if (!node) return;  // If node is null, stop recursion

        // If the node is a leaf (no children), record its value
        if (!node.left && !node.right) {
            cl(node.val);    // Debug log
            lfNode.push(node.val);
            return;
        }

        // Recurse into left and right subtrees
        dfs(node.left, lfNode);
        dfs(node.right, lfNode);
    }

    // Arrays that will hold leaf sequences of both trees
    let lfnode1 = [];
    let lfnode2 = [];

    // Collect leaves from both trees
    dfs(root1, lfnode1);
    dfs(root2, lfnode2);

    cl('ele-1', lfnode1);  // Debug: leaves from tree 1
    cl('ele-2', lfnode2);  // Debug: leaves from tree 2

    let p = lfnode1.length;
    let q = lfnode2.length;

    // If leaf counts differ, sequences can never match
    if (p !== q) return false;

    // --------------------------------------------
    // Compare leaf values element-by-element
    // --------------------------------------------
    for (let i = 0; i < p; i++) {
        if (lfnode1[i] !== lfnode2[i]) {
            return false;   // Mismatch → not leaf-similar
        }
    }

    // All leaf values match
    return true;
};
