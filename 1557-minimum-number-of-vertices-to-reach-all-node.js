class Graph {
    n;          // number of nodes, labeled [0 ... n-1]
    edges;      // edge list, e.g. [[0,1], [0,3], [1,2]]
    isDirected; // boolean: true for directed graph
    adj;        // adjacency list, e.g. [[1,3], [2], []]
    indegree;   // indegree[i] = number of incoming edges to node i
    outdegree;  // outdegree[i] = number of outgoing edges from node i

    constructor({ n, edges, isDirected, adj }) {
        this.n = n;
        this.edges = edges;
        this.isDirected = isDirected;

        // initialize indegree and outdegree arrays
        this.indegree = new Array(n).fill(0);
        this.outdegree = new Array(n).fill(0);

        // If adjacency list is NOT provided, build it from edges
        if (!adj) {
            adj = Array.from({ length: n }, () => []);

            for (let [u, v] of edges) {
                // add edge u -> v
                adj[u].push(v);
                this.indegree[v]++;
                this.outdegree[u]++;

                // if graph is undirected, also add v -> u
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

    // ❌ This dfs implementation has a bug:
    // - vis is re-created on every call
    // - recursive call does not pass destination
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

    // ✅ Correct DFS-based reachability check
    canReachDfs(source, destination) {
        let vis = new Array(this.n).fill(false);

        const dfs_ = (u) => {
            if (u === destination) return true;

            // avoid revisiting nodes
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

    // Returns ALL possible paths from source to destination
    // Assumes a DAG (no cycle handling here)
    getAllPaths(source, destination) {
        let res = [];

        const dfs_ = (u, path) => {
            // if destination reached, store a copy of the path
            if (u === destination) {
                res.push([...path]);
                return;
            }

            // explore neighbors
            for (let v of this.adj[u]) {
                path.push(v);
                dfs_(v, path);
                path.pop(); // backtrack
            }
        };

        dfs_(source, [source]);
        return res;
    }

    // Finds all nodes with indegree = 0
    // These are "source nodes" in a directed graph
    getSourceNodesDfs() {
        let res = [];

        for (let u = 0; u < this.n; u++) {
            if (this.indegree[u] === 0) {
                res.push(u);
            }
        }

        return res;
    }

    // TODO: breadth-first search
    bfs() { }

    // TODO: cycle detection
    hasCycle() { }

    // Demo usage examples
    demo() {
        {
            // Undirected graph reachability
            const isDirected = false;
            let g = new Graph({ n, edges, isDirected });
            g.dfs(source, destination);
        }

        {
            // Directed graph: find all source nodes
            const isDirected = true;
            let g = new Graph({ n, edges, isDirected });
            return g.getSourceNodesDfs();
        }

        {
            // LeetCode: All Paths From Source to Target
            const isDirected = true;
            let n = adj.length;
            let source = 0;
            let destination = n - 1;
            let g = new Graph({ n, isDirected, adj });
            g.getAllPaths(source, destination);
        }
    }
}

// LeetCode 1557: Minimum Number of Vertices to Reach All Nodes
// Idea: return all nodes with indegree 0
var findSmallestSetOfVertices = function (n, edges) {
    const isDirected = true;
    let g = new Graph({ n, edges, isDirected });
    return g.getSourceNodesDfs();
};
