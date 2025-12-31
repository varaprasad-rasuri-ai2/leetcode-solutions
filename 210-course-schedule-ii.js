// LeetCode-style function: Course Schedule II
// n = number of nodes (courses)
// edges = prerequisites [course, prereq]
var findOrder = function (n, edges) {
    const isDirected = true;

    // Reverse edges so prereq -> course
    // Input: [a, b] means b must be done before a
    edges = edges.map(([u, v]) => [v, u]);

    // Build directed graph
    let g = new Graph({ n, edges, isDirected });

    // Return topological ordering (or [] if cycle exists)
    return g.topologicalSort_kahnsAlgorithm_withOrder();
};

class Graph {
    // n: number of nodes [0 ... n-1]
    // edges: list of edges [u, v, w]
    // isDirected: boolean
    // adj: adjacency list => adj[u] = [[v, w], ...]
    // indegree / outdegree: used for topo sort & analysis

    constructor({ n, edges, isDirected, isOneIndexed, adj }) {
        this.n = n;
        this.edges = edges;
        this.isDirected = isDirected;
        this.isOneIndexed = isOneIndexed;

        // Track indegree & outdegree
        this.indegree = new Array(n).fill(0);
        this.outdegree = new Array(n).fill(0);

        // Build adjacency list only if not provided
        if (!adj) {
            adj = Array.from({ length: n }, () => []);

            for (let [u, v, w = 1] of edges) {
                // Convert 1-indexed to 0-indexed if needed
                if (isOneIndexed) {
                    u--;
                    v--;
                }

                // Add edge u -> v
                adj[u].push([v, w]);
                this.outdegree[u]++;
                this.indegree[v]++;

                // If undirected, also add v -> u
                if (isDirected === false) {
                    adj[v].push([u, w]);
                    this.outdegree[v]++;
                    this.indegree[u]++;
                }
            }
        }

        this.adj = adj;
    }

    // ❌ BUGGY: vis is recreated every call → DFS is incorrect
    // Use canReachDfs instead
    dfs(u, destination) {
        if (u === destination) return true;

        let vis = new Array(this.n).fill(false);
        if (vis[u]) return false;
        vis[u] = true;

        for (let [v, w] of this.adj[u]) {
            if (this.dfs(v)) return true;
        }
        return false;
    }

    // ✅ Correct DFS reachability check
    canReachDfs(source, destination) {
        let vis = new Array(this.n).fill(false);

        const dfs_ = u => {
            if (u === destination) return true;
            if (vis[u]) return false;

            vis[u] = true;

            for (let [v, w] of this.adj[u]) {
                if (dfs_(v)) return true;
            }
            return false;
        };

        return dfs_(source);
    }

    // Find all paths from source to destination (no cycle protection)
    getAllPaths(source, destination) {
        let res = [];

        const dfs_ = (u, path) => {
            if (u === destination) {
                res.push([...path]);
                return;
            }

            for (let [v, w] of this.adj[u]) {
                path.push(v);
                dfs_(v, path);
                path.pop();
            }
        };

        dfs_(source, [source]);
        return res;
    }

    // Return all nodes with indegree 0 (sources)
    getSourceNodesDfs() {
        let res = [];

        for (let u = 0; u < this.n; u++) {
            if (this.indegree[u] === 0) {
                res.push(u);
            }
        }
        return res;
    }

    // BFS traversal (Rooms and Keys problem)
    roomsAndKeysBfs(source) {
        let vis = new Set();
        let q = [source];
        vis.add(source);

        while (q.length) {
            let u = q.shift();

            for (let [v, w] of this.adj[u]) {
                if (!vis.has(v)) {
                    q.push(v);
                    vis.add(v);
                }
            }
        }
