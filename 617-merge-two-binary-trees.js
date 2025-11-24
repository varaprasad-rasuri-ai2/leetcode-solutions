var mergeTrees = function (root1, root2) {
    // If both nodes are null, return null (empty tree)
    if (!root1 && !root2) return null;

    // Create the root of the merged tree
    let root3 = new TreeNode();

    // Use BFS: each element contains [node1, node2, mergedNode]
    let queue = [];
    queue.push([root1, root2, root3]);

    while (queue.length > 0) {
        let [p, q, merged] = queue.shift();

        // If both nodes are null, nothing to merge
        if (!p && !q) continue;

        // Set merged node value
        merged.val = (p?.val ?? 0) + (q?.val ?? 0);

        // If either left child exists, create merged.left
        if (p?.left || q?.left) merged.left = new TreeNode();
        // If either right child exists, create merged.right
        if (p?.right || q?.right) merged.right = new TreeNode();

        // Push the children pairs into the queue
        queue.push([p?.left, q?.left, merged?.left]);
        queue.push([p?.right, q?.right, merged?.right]);
    }

    return root3;
};


// Simple & Most Common (Recursive DFS) - Best approach
var mergeTrees222 = function (t1, t2) {
    if (!t1) return t2;
    if (!t2) return t1;

    let root = new TreeNode(t1.val + t2.val);
    root.left = mergeTrees(t1.left, t2.left);
    root.right = mergeTrees(t1.right, t2.right);
    return root;
};

