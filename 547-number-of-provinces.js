var findCircleNum = function (isConnected) {
	let m = isConnected.length;      // number of cities (rows)
	let n = isConnected[0].length;   // number of cities (columns)

	let uf = new UF(m);

	for (let u = 0; u < m; u++) {
		for (let v = 0; v < n; v++) {
			if (isConnected[u][v]) { // if u is directly connected to v
				uf.union(u, v);     // merge their components
				// uf.union(v, u); // unnecessary, graph is symmetric
			}
		}
	}

	return uf.getRootCount(); // count how many components remain
};


class UF {
	parent = [];   // parent[i] = representative of i
	size = [];     // size of the set rooted at node i
	n = 0;

	constructor(n) {
		let { parent, size } = this;
		this.n = n;

		// initialize each node as its own root
		for (let x = 0; x < n; x++) {
			parent[x] = x;
			size[x] = 1;
		}
	}

	find(x) {
		// path compression to flatten tree
		if (this.parent[x] === x) return x;

		let root = this.find(this.parent[x]);
		this.parent[x] = root;
		return root;
	}

	union(x, y) {
		let rx = this.find(x);
		let ry = this.find(y);

		if (rx === ry) return; // already in the same group

		// union by size: attach smaller tree under larger tree
		if (this.size[rx] < this.size[ry]) {
			[ry, rx] = [rx, ry]; // swap so rx is always the bigger root
		}

		this.parent[ry] = rx;
		this.size[rx] += this.size[ry];
	}

	getRootCount() {
		let count = 0;
		for (let u = 0; u < this.n; u++) {
			if (this.find(u) === u) count++; // root means a component
		}
		return count;
	}
}



