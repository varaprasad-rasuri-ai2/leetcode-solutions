// LeetCode: Network Delay Time
// Builds a directed graph and runs Dijkstra from `source`
var networkDelayTime = function (edges, n, source) {
    const isDirected = true;      // graph is directed
    const isOneIndexed = true;    // nodes are labeled 1..n in input
    let g = new Graph({ n, edges, isDirected, isOneIndexed });
    return g.dijkstras(source);
};

class Graph {
    // number of nodes
    n; // nodes are [0, n-1] internally

    // edge list: [u, v, w]
    edges;

    // directed or undirected graph
    isDirected;

    // adjacency list: adj[u] = [[v, w], ...]
    adj;

    // indegree and outdegree arrays
    indegree;
    outdegree;

    constructor({ n, edges, isDirected, isOneIndexed, adj }) {
        this.n = n;
        this.edges = edges;
        this.isDirected = isDirected;
        this.isOneIndexed = isOneIndexed;

        // initialize degree arrays
        this.indegree = new Array(n).fill(0);
        this.outdegree = new Array(n).fill(0);

        // build adjacency list if not provided
        if (!adj) {
            adj = Array.from({ length: n }, () => []);

            for (let [u, v, w = 1] of edges) {
                // convert to 0-based indexing if needed
                if (isOneIndexed) {
                    u--;
                    v--;
                }

                // add edge u -> v with weight w
                adj[u].push([v, w]);
                this.indegree[v]++;
                this.outdegree[u]++;

                // if undirected, add reverse edge
                if (isDirected === false) {
                    adj[v].push([u, w]);
                    this.indegree[u]++;
                    this.outdegree[v]++;
                }
            }
        }

        this.adj = adj;
    }

    // ❌ Incorrect DFS: `vis` resets every call (kept as-is)
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

    // ✅ Correct DFS to check reachability
    canReachDfs(source, destination) {
        let vis = new Array(this.n).fill(false);

        const dfs_ = (u) => {
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

    // Returns all paths from source to destination (no cycle protection)
    getAllPaths(source, destination) {
        let res = [];

        const dfs_ = (u, path) => {
            if (u === destination) {
                res.push([...path]); // copy current path
                return;
            }

            for (let [v, w] of this.adj[u]) {
                path.push(v);
                dfs_(v, path);
                path.pop(); // backtrack
            }
        };

        dfs_(source, [source]);
        return res;
    }

    // Returns all nodes with indegree 0
    getSourceNodesDfs() {
        let res = [];

        for (let u = 0; u < this.n; u++) {
            if (this.indegree[u] === 0) {
                res.push(u);
            }
        }

        return res;
    }

    // BFS to check if all nodes are reachable from source
    // (LeetCode: Keys and Rooms)
    roomsAndKeysBfs(source) {
        let vis = new Set();
        let q = [source];

        vis.add(source);

        while (q.length) {
            let u = q.shift();

            for (let [v, w] of this.adj[u]) {
                if (!vis.has(v)) {
                    vis.add(v);
                    q.push(v);
                }
            }
        }

        return vis.size === this.n;
    }

    // Dijkstra's algorithm (min distance from source)
    dijkstras(source) {
        // convert source to 0-based index
        if (this.isOneIndexed) {
            source--;
        }

        let minDistFromSource = new Array(this.n).fill(Infinity);

        // priority queue storing nodes (distance handled via array)
        let pq = new PriorityQueue((a, b) => a - b);

        pq.enqueue(source);
        minDistFromSource[source] = 0;

        while (!pq.isEmpty()) {
            let u = pq.dequeue();

            for (let [v, w] of this.adj[u]) {
                // relax edge
                if (minDistFromSource[u] + w < minDistFromSource[v]) {
                    minDistFromSource[v] = minDistFromSource[u] + w;
                    pq.enqueue(v);
                }
            }
        }

        // network delay time = max shortest path
        let res = Math.max(...minDistFromSource);
        return res === Infinity ? -1 : res;
    }

    // placeholders
    bfs() { }
    hasCycle() { }

    // demo usage for different problems
    demo() {
        {
            const isDirected = false;
            let g = new Graph({ n, edges, isDirected });
            g.dfs(source, destination);
        }
        {
            const isDirected = false;
            let g = new Graph({ n, edges, isDirected });
            return g.canReachDfs(source, destination);
        }
        {
            const isDirected = true;
            let g = new Graph({ n, edges, isDirected });
            return g.getSourceNodesDfs();
        }
        {
            // allPathsSourceTarget
            const isDirected = true;
            let n = adj.length;
            let source = 0;
            let destination = n - 1;
            let g = new Graph({ n, isDirected, adj });
            g
