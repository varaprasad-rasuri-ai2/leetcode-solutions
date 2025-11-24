var averageOfLevels = function(root) {
    let result = [];
    let queue = [root];

    while (queue.length) {
        let size = queue.length;
        let sum = 0;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            sum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(sum / size);
    }

    return result;
};


var averageOfLevels222 = function (root) {
    let nodeValsAtLevelArray = [];  // array of arrays, storing values at each level

    let queue = [];
    queue.push([root, 0]); // start BFS with level 0

    while (queue.length > 0) {
        let [n, level] = queue.shift();
        if (!n) continue; // skip null nodes

        // create inner list for the level if missing
        nodeValsAtLevelArray[level] = nodeValsAtLevelArray[level] ?? [];
        nodeValsAtLevelArray[level].push(n.val);

        // push children with level + 1
        queue.push([n.left, level + 1]);
        queue.push([n.right, level + 1]);
    }

    // compute averages
    let res = [];
    for (let nodeValsAtLevel of nodeValsAtLevelArray) {
        let sum = nodeValsAtLevel.reduce((a, b) => a + b, 0);
        let avg = sum / nodeValsAtLevel.length;
        res.push(avg);
    }
    return res;
};
