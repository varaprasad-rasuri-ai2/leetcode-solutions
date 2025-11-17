const cl = console.log

var binaryTreePaths = function (root) {
    let res = [];

    function dfs(n, prevPath) {
        if (!n) return;

        // Debug log showing current value and path so far
        cl({ nval: n.val, prevPath });

        // Add current node to the path
        prevPath.push(n.val);

        // If it's a leaf, save the completed path
        if (!n.left && !n.right) {
            res.push([...prevPath]);   // copy because prevPath will mutate
            prevPath.pop();            // backtrack
            return;
        }

        // Explore both children
        dfs(n.left, prevPath);
        dfs(n.right, prevPath);

        // Backtrack after returning from recursive calls
        prevPath.pop();
    }

    dfs(root, []);
    return res.map(arr => arr.join("->"));
};

var binaryTreePaths33333333333 = function (root) {
    let res = [];

    function dfs(n, prevPath) {
        if (!n) return;

        // Create a new path including the current node
        let newPath = [...prevPath, n.val];

        // Leaf node: store the complete path
        if (!n.left && !n.right) {
            res.push(newPath);
            return;
        }

        // Explore children using the new path
        dfs(n.left, newPath);
        dfs(n.right, newPath);
    }

    dfs(root, []);
    return res.map(arr => arr.join("->"));
};

var binaryTreePaths2222222222 = function (root) {
    let res = [];

    function dfs(n, prevPath) {
        if (!n) return;

        // Leaf node: push completed path (build directly)
        if (!n.left && !n.right) {
            res.push([...prevPath, n.val]);
            return;
        }

        // Recurse with a fresh path on each call
        dfs(n.left, [...prevPath, n.val]);
        dfs(n.right, [...prevPath, n.val]);
    }

    dfs(root, []);
    return res.map(arr => arr.join("->"));
};


