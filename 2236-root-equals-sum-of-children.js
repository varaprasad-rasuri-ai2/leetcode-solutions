var checkTree = function (root) {
    // The problem guarantees the node has exactly two children.
    // Check if the value of the root equals the sum of its children's values.
    return root.val === (root.left.val + root.right.val);
};

var checkTree222 = function (root) {
    // Access the root node's value.
    const rootValue = root.val;

    // Access the values of the left and right child nodes.
    const leftValue = root.left.val;
    const rightValue = root.right.val;

    // Return true if the root's value matches the sum of its children, false otherwise.
    return rootValue === leftValue + rightValue;
};
