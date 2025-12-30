class Graph {
    n;          // number of nodes, labeled [0 ... n-1]
    edges;      // list of edges, e.g. [[0,1], [0,3]]
    isDirected; // true = directed graph, false = undirected
    adj;        // adjacency list representation
    indegree;   // indegree[i] = number of incoming edges to node i
    outdegree;  // outdegree[i] = number of outgoing edges from node i

    constructor({ n, edges, isDirected, adj }) {
        this.n = n;
        this.edges = edges;
        this.isDirected = isDirected;

        // initialize indegree and outdegree arrays
        this.indegree = new Array(n).fill(0);
        this.outdegree = new Array(n).fill(0);

        // If adjacency list is not provided, build it from edges
        if (!adj) {
            adj = Array.from({ length: n }, () => []);

            for (let [u, v] of edges) {
                // add edge u -> v
                adj[u].push(v);
                this.indegree[v]++;
                this.outdegree[u]++;

                // if undirected, also add edge v -> u
                if (isDirected === false) {
                    adj[v].push(u);
                    this.indegree[u]++;
                    this.outdegree[v]++;
                }
            }
        }

        // store adjacency list
        this.adj = adj;
    }

    // ❌ Incorrect DFS (vis is recreated every call)
    // Left as-is, but should not be used
    dfs(u, destination) {
        if (u === destination) return true;

        let vis = new Array(this.n).fill(false);
        if (vis[u]) return false;
        vis[u] = true;

        for (let v of this.adj[u]) {
            if (this.dfs(v)) return true;
        }
        return false;
    }

    // ✅ Correct DFS to check if destination is reachable from source
    canReachDfs(source, destination) {
        let vis = new Array(this.n).fill(false);

        const dfs_ = u => {
            // destination reached
            if (u === destination) return true;

            // already visited
            if (vis[u]) return false;
            vis[u] = true;

            // explore neighbors
            for (let v of this.adj[u]) {
                if (dfs_(v)) return true;
            }
            return false;
        };

        return dfs_(source);
    }

    // Returns all possible paths from source to destination
    // Assumes graph has no cycles (DAG)
    getAllPaths(source, destination) {
        let res = [];

        const dfs_ = (u, path) => {
            // destination reached, store path
            if (u === destination) {
                res.push([...path]);
                return;
            }

            // explore neighbors
            for (let v of this.adj[u]) {
                path.push(v);      // choose
                dfs_(v, path);    // explore
                path.pop();       // backtrack
            }
        };

        dfs_(source, [source]);
        return res;
    }

    // Returns all nodes with indegree 0
    // Used in "Minimum Number of Vertices to Reach All Nodes"
    getSourceNodesDfs() {
        let res = [];

        for (let u = 0; u < this.n; u++) {
            if (this.indegree[u] === 0) {
                res.push(u);
            }
        }

        return res;
    }

    // BFS solution for "Keys and Rooms" problem
    // Checks if all rooms can be visited starting from source
    roomsAndKeysBfs(source) {
        let vis = new Set(); // visited rooms
        let q = [source];    // BFS queue

        vis.add(source);

        while (q.length) {
            let u = q.shift(); // dequeue

            // explore all keys (neighbors)
            for (let v of this.adj[u]) {
                if (!vis.has(v)) {
                    vis.add(v);
                    q.push(v);
                }
            }
        }

        // if all rooms were visited, return true
        return vis.size === this.n;
    }

    // TODO: general BFS traversal
    bfs() { }

    // TODO: cycle detection (directed / undirected)
    hasCycle() { }

    // Example usages
    demo() {
        {
            // Undirected graph DFS
            const isDirected = false;
            let g = new Graph({ n, edges, isDirected });
            g.dfs(source, destination);
        }
        {
            // Directed graph source nodes
            const isDirected = true;
            let g = new Graph({ n, edges, isDirected });
            return g.getSourceNodesDfs();
        }
        {
            // All paths from source to target
            const isDirected = true;
            let n = adj.length;
            let source = 0;
            let destination = n - 1;
            let g = new Graph({ n, isDirected, adj });
            g.getAllPaths(source, destination);
        }
    }
}

// LeetCode: Keys and Rooms
// Treat rooms as nodes and keys as directed edges
var canVisitAllRooms = function (adj) {
    const isDirected = true;
    let n = adj.length;
    let source = 0;

    let g = new Graph({ n, isDirected, adj });
    return g.roomsAndKeysBfs(source);
};
