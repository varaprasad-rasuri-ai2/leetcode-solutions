// Determines whether a path exists between 'source' and 'destination'
var validPath = function (n, edges, source, destination) {

    // Create Union-Find structure
    let uf = new UF(n);

    // For each undirected edge, union the two vertices
    // Only need to call it ONCE because union(u, v) = union(v, u)
    for (let [u, v] of edges) {
        uf.union(u, v);
    }

    // If source and destination have same root, they are connected
    return uf.find(source) === uf.find(destination);
};


// Union-Find (Disjoint Set Union)
// Supports: find, union, path compression, union by size
class UF {
    parent = [];
    size = [];

    constructor(n) {
        // Initialize each node to be its own parent (self root)
        // and size to 1
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.size[i] = 1;
        }
    }

    // Find root of the set with path compression
    find(x) {
        if (this.parent[x] === x) return x;
        return this.parent[x] = this.find(this.parent[x]);
    }

    // Union two sets by size
    union(x, y) {
        let rx = this.find(x);
        let ry = this.find(y);

        if (rx === ry) return; // already connected

        // Attach smaller tree under the larger one
        if (this.size[rx] < this.size[ry]) {
            [rx, ry] = [ry, rx];
        }

        this.parent[ry] = rx;
        this.size[rx] += this.size[ry];
    }
}
