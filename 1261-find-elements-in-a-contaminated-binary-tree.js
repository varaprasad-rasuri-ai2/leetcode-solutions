class FindElements {
    // Holds the recovered root of the binary tree
    root;

    constructor(root) {

        // Depth-first traversal to recover the tree values
        // n: current node
        // v: value that should be assigned to the current node
        let dfsRecoverTree = (n, v) => {
            // Base case: if node is null, stop recursion
            if (!n) return;

            // Assign the recovered value to the current node
            n.val = v;

            // Recover left child with value 2 * v + 1
            dfsRecoverTree(n.left, 2 * v + 1);

            // Recover right child with value 2 * v + 2
            dfsRecoverTree(n.right, 2 * v + 2);
        };

        // Start recovering the tree from the root with value 0
        dfsRecoverTree(root, 0);

        // Store the recovered root
        this.root = root;
    }

    find(target) {

        // Depth-first search to find the target value
        let dfsFind = n => {
            // If node is null, target is not found in this path
            if (!n) return false;

            // If current node has the target value, return true
            if (n.val === target) return true;

            // Search in the left subtree
            if (dfsFind(n.left)) return true;

            // Search in the right subtree
            if (dfsFind(n.right)) return true;

            // Target not found in this subtree
            return false;
        };

        // Start searching from the root
        return dfsFind(this.root);
    }
}
