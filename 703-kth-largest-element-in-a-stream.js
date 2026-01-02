var KthLargest = function (k, a) {
    // Min-heap (priority queue) to keep the k largest elements
    // Smallest element in the heap will be the k-th largest overall
    let minPq = new PriorityQueue((a, b) => a - b);

    // Add initial elements to the heap
    for (let e of a) {
        minPq.enqueue(e);
    }

    // Define the add method for the KthLargest object
    KthLargest.prototype.add = function (e) {
        // Add the new element to the heap
        minPq.enqueue(e);

        // Ensure the heap size never exceeds k
        // Remove the smallest element if it does
        while (minPq.size() > k) {
            minPq.dequeue();
        }

        // The root of the min-heap is the k-th largest element
        return minPq.front();
    };
};
