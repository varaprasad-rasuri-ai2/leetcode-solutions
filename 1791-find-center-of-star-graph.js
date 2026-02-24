var findCenter = function (edges) {
    let inDegree = {}
    let outDegree = {}

    // Build degree count for all nodes
    for (let [u, v] of edges) {
        // For undirected graph, we count both directions
        outDegree[u] = (outDegree[u] || 0) + 1
        inDegree[v] = (inDegree[v] || 0) + 1
        outDegree[v] = (outDegree[v] || 0) + 1
        inDegree[u] = (inDegree[u] || 0) + 1
    }

    // There are n = edges.length + 1 nodes in total
    let n = edges.length + 1

    // The center node is connected to n-1 other nodes
    for (let u = 1; u <= n; u++) {
        if (outDegree[u] === (n - 1)) {
            return u
        }
    }

    // Fallback if something unexpected happens
    return -1
};

var findCenter222 = function (edges) {
    let [p1, p2] = edges[0]; // pointer to first edge
    let [p3, p4] = edges[1]; // pointer to second edge

    // Compare using two “pointers” (two edges)
    return (p1 === p3 || p1 === p4) ? p1 : p2;
};

// Finds the center node of a star graph
// In a star graph, the center node appears in every edge
var findCenter333 = function (edges) {
    let d = {} // Object to store degree (number of connections) of each node

    for (let [u, v] of edges) {
        // Increase degree count for node u
        d[u] = (d[u] ?? 0) + 1
        
        // If u appears more than once, it must be the center
        // because in a star graph only the center has degree > 1
        if (d[u] > 1) return u

        // Increase degree count for node v
        d[v] = (d[v] ?? 0) + 1
        
        // If v appears more than once, it must be the center
        if (d[v] > 1) return v
    }
};

