// LeetCode: Course Schedule
// Determines if all courses can be finished (i.e., no cycle in directed graph)

var canFinish = function (n, edges) {
    const isDirected = true;

    // Reverse edges:
    // Original: [course, prerequisite]
    // We want: prerequisite -> course
    edges = edges.map(([u, v]) => [v, u]);

    // Build directed graph
    let g = new Graph({ n, edges, isDirected });

    // If topological sort visits all nodes, no cycle exists
    return g.topologicalSort_kahnsAlgorithm();
};

class Graph {
    // n         : number of nodes [0 ... n-1]
    // edges     : list of edges [u, v]
    // adj       : adjacency list => adj[u] = [[v, weight]]
    // indegree  : number of incoming edges per node
    // outdegree : number of outgoing edges per node

    constructor({ n, edges, isDirected, isOneIndexed, adj }) {
        this.n = n;
        this.edges = edges;
        this.isDirected = isDirected;
        this.isOneIndexed = isOneIndexed;

        this.indegree = new Array(n).fill(0);
        this.outdegree = new Array(n).fill(0);

        // Build adjacency list if not provided
        if (!adj) {
            adj = Array.from({ length: n }, () => []);

            for (let [u, v, w = 1] of edges) {
                // Convert from 1-indexed to 0-indexed if needed
                if (isOneIndexed) {
                    u--;
                    v--;
                }

                // Add edge u -> v
                adj[u].push([v, w]);
                this.outdegree[u]++;
                this.indegree[v]++;

                // If graph is undirected, add reverse edge
                if (isDirected === false) {
                    adj[v].push([u, w]);
                    this.outdegree[v]++;
                    this.indegree[u]++;
                }
            }
        }

        this.adj = adj;
    }

    // ❌ Incorrect DFS (vis array resets on every call)
    // Kept for reference
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

    // Returns all paths from source to destination (DAG problems)
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
                path.pop(); // backtracking
            }
        };

        dfs_(source, [source]);
        return res;
    }

    // Returns nodes with indegree = 0 (graph sources)
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

        // Check if all nodes were visited
        return vis.size === this.n;
    }

    // Standard Dijkstra (shortest path)
    dijkstras(source) {
        if (this.isOneIndexed) source--;

        let minDistFromSource = new Array(this.n).fill(Infinity);
        minDistFromSource[source] = 0;

        // Min-heap by distance
        let pq = new PriorityQueue((a, b) => a[1] - b[1]);
        pq.enqueue([source, 0]);

        while (!pq.isEmpty()) {
            let [u, distU] = pq.dequeue();

            for (let [v, w] of this.adj[u]) {
                if (minDistFromSource[u] + w < minDistFromSource[v]) {
                    minDistFromSource[v] = minDistFromSource[u] + w;
                    pq.enqueue([v, minDistFromSource[v]]);
                }
            }
        }

        let res = Math.max(...minDistFromSource);
        return res === Infinity ? -1 : res;
    }

    // Modified Dijkstra for maximum probability path
    dijkstrasPathProbability(source) {
        if (this.isOneIndexed) source--;

        let maxDistFromSource = new Array(this.n).fill(0);
        maxDistFromSource[source] = 1;

        // Max-heap by probability
        let pq = new PriorityQueue((a, b) => b[1] - a[1]);
        pq.enqueue([source, 1]);

        while (!pq.isEmpty()) {
            let [u, probU] = pq.dequeue();

            for (let [v, w] of this.adj[u]) {
                let newProb = maxDistFromSource[u] * w;
                if (newProb > maxDistFromSource[v]) {
                    maxDistFromSource[v] = newProb;
                    pq.enqueue([v, newProb]);
                }
            }
        }

        return maxDistFromSource;
    }

    // ✅ Kahn’s Algorithm (Topological Sort using BFS)
    // Used to detect cycles in a directed graph
    topologicalSort_kahnsAlgorithm() {
        let { indegree, n } = this;

        // Start with nodes having indegree 0
        let q = [];
        for (let u = 0; u < n; u++) {
            if (indegree[u] === 0) {
                q.push(u);
            }
        }

        let visitedCount = 0;

        while (q.length) {
            let u = q.shift();
            visitedCount++;

            // Reduce indegree of neighbors
            for (let [v, w] of this.adj[u]) {
                indegree[v]--;
                if (indegree[v] === 0) {
                    q.push(v);
                }
            }
        }

        // If all nodes were processed, graph has no cycle
        return visitedCount === n;
    }

    bfs() {}
    hasCycle() {}

    // Demo method showing reuse of Graph for multiple problems
    demo() {
        // Examples omitted for brevity — this is a sandbox
    }
}
