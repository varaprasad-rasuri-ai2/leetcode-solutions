var findOrder = function (n, edges) {
    const isDirected = true
    edges = edges.map(([u, v]) => [v, u])
    let g = new Graph({ n, edges, isDirected })
    return g.topologicalSort_kahnsAlgorithm_withOrder()

};

class Graph {
    n; // [0, n-1]
    edges; // [ [0,1], [0,1], [0,3], [0,4] ]
    isDirected;
    adj; // adjcencyList;  [ [1,2,3,4] ]
    indegree;
    outdegree;

    constructor({ n, edges, isDirected, isOneIndexed, adj }) {
        this.n = n;
        this.edges = edges;
        this.isDirected = isDirected;
        this.isOneIndexed = isOneIndexed;
        this.indegree = new Array(n).fill(0);
        this.outdegree = new Array(n).fill(0);

        if (!adj) {
            adj = Array.from({ length: n }, () => []);
            for (let [u, v, w = 1] of edges) {
                if (isOneIndexed) {
                    u--;
                    v--;
                }
                adj[u].push([v, w]);
                this.outdegree[u]++;
                this.indegree[v]++;
                if (isDirected === false) {
                    adj[v].push([u, w]);
                    this.outdegree[v]++;
                    this.indegree[u]++;
                }
            }
        }
        this.adj = adj;

        // cl({ n, edges})
        // cl({ isDirected })
        // cl({ adj })
    }
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
    getSourceNodesDfs() {
        let res = [];

        for (let u = 0; u < this.n; u++) {
            if (this.indegree[u] === 0) {
                res.push(u);
            }
        }

        return res;
    }
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

        return vis.size === this.n;
    }
    dijkstras(source) {
        if (this.isOneIndexed) {
            source--;
        }

        let minDistFromSource = new Array(this.n).fill(Infinity);
        minDistFromSource[source] = 0;

        let pq = new PriorityQueue((a, b) => a[1] - b[1]);
        pq.enqueue([source, minDistFromSource[source]]);

        while (!pq.isEmpty()) {
            let [u, minDistancetoUFromSource] = pq.dequeue();
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
    dijkstrasPathProbability(source) {
        if (this.isOneIndexed) {
            source--;
        }

        let maxDistFromSource = new Array(this.n).fill(0);
        maxDistFromSource[source] = 1;

        let pq = new PriorityQueue((a, b) => b[1] - a[1]);
        pq.enqueue([source, maxDistFromSource[source]]);

        while (!pq.isEmpty()) {
            let [u, minDistancetoUFromSource] = pq.dequeue();
            for (let [v, w] of this.adj[u]) {
                if (maxDistFromSource[u] * w > maxDistFromSource[v]) {
                    maxDistFromSource[v] = maxDistFromSource[u] * w;
                    pq.enqueue([v, maxDistFromSource[v]]);
                }
            }
        }
        // cl({ maxDistFromSource })
        return maxDistFromSource;
    }
    topologicalSort_kahnsAlgorithm() {
        let { indegree, n } = this

        let q = []
        for (let u = 0; u < n; u++) {
            if (indegree[u] === 0) {
                q.push(u)
            }
        }

        let visitedCount = 0
        while (q.length) {
            let u = q.shift()
            visitedCount++
            for (let [v, w] of this.adj[u]) {
                indegree[v]--
                if (indegree[v] === 0) {
                    q.push(v)
                }
            }
        }

        return visitedCount === n
    }

    topologicalSort_kahnsAlgorithm_withOrder() {
        let { indegree, n } = this

        let q = []

        for (let u = 0; u < n; u++) {
            if (indegree[u] === 0) {
                q.push(u)
            }
        }

        let order = []
        while (q.length) {
            let u = q.shift()
            order.push(u)

            for (let [v, w] of this.adj[u]) {
                indegree[v]--
                if (indegree[v] === 0) {
                    q.push(v)
                }
            }
        }

        return order.length === n ? order : []
    }

    bfs() { }
    hasCycle() { }

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
            g.getAllPaths(source, destination);
        }
        {
            // bfs
            const isDirected = true;
            let n = adj.length;
            let source = 0;
            let g = new Graph({ n, isDirected, adj });
            return g.roomsAndKeysBfs(source);
        }
        {
            let n, edges, succProb, source, destination;
            const isDirected = false;
            edges = edges.map(([u, v], i) => [u, v, succProb[i]]);
            const g = new Graph({ n, edges, isDirected });
            let maxDistFromSource = g.dijkstrasPathProbability(source);
            return maxDistFromSource[destination];
        }

        {
            const isDirected = true;
            edges = edges.map(([u, v]) => [v, u])
            let g = new Graph({ n, edges, isDirected });
            return g.topologicalSort_kahnsAlgorithm();
        }
        {
            const isDirected = true;
            edges = edges.map(([u, v]) => [v, u])
            let g = new Graph({ n, edges, isDirected });
            return g.topologicalSort_kahnsAlgorithm();
        }
    }
}