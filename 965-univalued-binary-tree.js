let cl = console.log
var isUnivalTree = function (root) {
    // Array to store all node values from the tree
    let vals = []

    // Recursive DFS function to traverse the tree in preorder
    function dfs(n) {
        if (!n) return // Base case: if node is null, stop recursion

        // Visit the current node: store its value
        vals.push(n.val)

        // Recurse on the left child
        dfs(n.left)

        // Recurse on the right child
        dfs(n.right)
    }

    // Start DFS traversal from the root
    dfs(root)

    // Number of nodes in the tree
    let n = vals.length
    cl({ vals, n }) // Debug log: print all node values and count

    // Reference value: the value of the root node
    let rootVal = vals[0]

    // Check every node to see if it matches the root value
    for (let i = 0; i < n; i++) {
        // if (vals[i] === 0) return false
        // if (vals[i] !== rootVal) return false
        // If any node has a different value, the tree is NOT univalued
        if (vals[i] !== rootVal) {
            return false
        }
    }

    // If all nodes matched the root value, the tree is univalued
    return true
};
