// Class that stores values with integer keys and
// returns values in increasing order starting from `start`
class OrderedStream {
    // Pointer to the next expected index
    start = 1;

    // Object to store inserted values by key
    o = {};

    // Total number of expected elements
    n = 0;

    // Constructor initializes the stream size
    constructor(n) {
        this.n = n;
    }

    // Inserts a value `v` at position `k`
    insert(k, v) {
        // Destructure instance properties for easier access
        let { o, n, start } = this;

        // Store the value at its key
        o[k] = v;

        let res = [];

        // Only return values if the inserted key matches
        // the current start pointer
        if (k === start) {
            // Collect all consecutive values starting from `start`
            for (; start <= n; start++) {
                if (start in o) {
                    res.push(o[start]);
                } else {
                    break;
                }
            }
            // Update the start pointer to the next missing index
            this.start = start;
        }

        // Return the collected values (may be empty)
        return res;
    }
};
