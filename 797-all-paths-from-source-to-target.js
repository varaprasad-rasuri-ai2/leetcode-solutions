let cl = console.log

var allPathsSourceTarget = function (graph) {
    // graph is an adjacency list
    // graph[i] = list of nodes reachable from node i

    cl({ graph })
    cl({ n: graph.length })

    let n = graph.length           // total number of nodes
    let target = n - 1             // destination node (last node)
    let allPaths = []              // stores all valid paths from 0 → target

    // DFS helper function
    function dfs(node, path) {
        // add current node to the path
        path.push(node)

        // if destination is reached, store a copy of the path
        if (node === target) {
            allPaths.push([...path]) // spread creates a copy
        } else {
            // explore all neighbors of current node
            for (let next of graph[node]) {
                dfs(next, path)
            }
        }

        // remove current node before returning
        // this enables backtracking
        path.pop()
    }

    // start DFS from node 0 with an empty path
    dfs(0, [])

    // return all possible paths
    return allPaths
};
