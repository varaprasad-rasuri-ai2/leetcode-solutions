let cl = console.log

var increasingBST = function (root) {
    // Array to collect values in sorted order
    let vals = [];

    // Inorder traversal: left → node → right
    // For a BST, this produces sorted values
    function dfs(n) {
        if (!n) return;

        dfs(n.left);
        vals.push(n.val);   // visit current node
        dfs(n.right);
    }

    dfs(root);

    // Build the new tree in increasing order
    // Start with a dummy head node
    let head = new TreeNode();
    let curr = head;

    // Each value becomes a new node that only has a right child
    for (let val of vals) {
        curr.right = new TreeNode(val);  // attach new node
        curr = curr.right;               // move forward
    }

    // The real tree starts at head.right (skip the dummy)
    return head.right;
};

var increasingBST222 = function (root) {
    // Array to store BST node values in sorted order
    let vals = [];

    // Immediately-invoked recursive function (IIFE) for inorder traversal
    // Inorder traversal of a BST produces ascending sorted values
   // Inorder traversal: left → node → right
    // For a BST, this produces sorted values
    function dfs(n) {
        if (!n) return;

        dfs(n.left);
        vals.push(n.val);   // visit current node
        dfs(n.right);
    }

    dfs(root);

    // Create a dummy node to start the new tree
    let cur = new TreeNode(0), head = cur;

    // Build the new tree: each value becomes a right-only node
    for (let v of vals) {
        cur = cur.right = new TreeNode(v);  // attach new node and move pointer
    }

    // Return the real root (skip the dummy node)
    return head.right;
};
