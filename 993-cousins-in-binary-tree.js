var isCousins = function(root, x, y) {
    // Variables to store parent and depth of x and y
    let xp, yp; // parent nodes
    let xd, yd; // depths

    // DFS helper function to traverse tree
    // n = current node, p = parent node, d = depth
    function dfs(n, p, d) {
        if (!n) return; // base case: null node

        // If current node is x, store its parent and depth
        if (n.val === x) {
            xp = p;
            xd = d;
        }

        // If current node is y, store its parent and depth
        if (n.val === y) {
            yp = p;
            yd = d;
        }

        // Recursively search left and right children
        dfs(n.left, n, d + 1);
        dfs(n.right, n, d + 1);
    }

    // Start DFS from root (parent = null, depth = 0)
    dfs(root, null, 0);

    // Two nodes are cousins if:
    // 1. They are at the same depth
    // 2. They have different parents
    return (xd === yd) && (xp !== yp);
};


