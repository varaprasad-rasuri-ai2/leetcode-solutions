// LeetCode: Path With Maximum Probability
// Computes the maximum probability of reaching destination from source

var maxProbability = function (n, edges, succProb, source, destination) {
	const isDirected = false;

	// Attach probability to each edge: [u, v, probability]
	edges = edges.map(([u, v], i) => [u, v, succProb[i]]);

	// Build graph
	const g = new Graph({ n, edges, isDirected });

	// Run modified Dijkstra to get max probability to every node
	let maxDistFromSource = g.dijkstrasPathProbability(source);

	return maxDistFromSource[destination];
};

class Graph {
	// n: number of nodes [0 ... n-1]
	// edges: list of edges [u, v, w]
	// adj: adjacency list => adj[u] = [[v, w], ...]

	constructor({ n, edges, isDirected, isOneIndexed, adj }) {
		this.n = n;
		this.edges = edges;
		this.isDirected = isDirected;
		this.isOneIndexed = isOneIndexed;

		// Track indegree and outdegree of nodes
		this.indegree = new Array(n).fill(0);
		this.outdegree = new Array(n).fill(0);

		// If adjacency list not provided, build it from edges
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
				this.indegree[v]++;
				this.outdegree[u]++;

				// If undirected, also add v -> u
				if (isDirected === false) {
					adj[v].push([u, w]);
					this.indegree[u]++;
					this.outdegree[v]++;
				}
			}
		}

		this.adj = adj;
	}

	// ❌ Incorrect DFS (vis is recreated on every call)
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

	// Returns all possible paths from source to destination
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
				path.pop(); // backtrack
			}
		};

		dfs_(source, [source]);
		return res;
	}

	// Returns nodes with indegree = 0
	getSourceNodesDfs() {
		let res = [];

		for (let u = 0; u < this.n; u++) {
			if (this.indegree[u] === 0) {
				res.push(u);
			}
		}
		return res;
	}

	// BFS reachability (Rooms and Keys problem)
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

		// Min-heap based on distance
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

	// 🔥 Modified Dijkstra for MAX probability paths
	dijkstrasPathProbability(source) {
		if (this.isOneIndexed) source--;

		// Store maximum probability to reach each node
		let maxDistFromSource = new Array(this.n).fill(0);
		maxDistFromSource[source] = 1;

		// Max-heap based on probability
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

	// Placeholders
	bfs() {}
	hasCycle() {}
}
