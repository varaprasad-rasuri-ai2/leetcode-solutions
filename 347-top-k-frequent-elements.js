var topKFrequent = function (a, k) {
    // Map to store the frequency of each element
    const map = new Map();

    // Count how many times each element appears in the array
    for (let e of a) {
        map.set(e, map.has(e) ? map.get(e) + 1 : 1);
    }

    // Min-heap priority queue based on frequency (count)
    // The element with the smallest frequency is at the top
    let pq = new PriorityQueue((a, b) => a[1] - b[1]);

    // Iterate through the frequency map
    for (let [e, c] of map) {
        // Add the element and its count to the heap
        pq.enqueue([e, c]);

        // If heap size exceeds k, remove the least frequent element
        if (pq.size() > k) {
            pq.dequeue();
        }
    }

    
    // Array to store the result
    let res = [];

    // Extract elements from the heap
    while (!pq.isEmpty()) {
        // Push only the element (not its frequency)
        res.push(pq.dequeue()[0]);
    }

    // Return the k most frequent elements
    return res;
};
