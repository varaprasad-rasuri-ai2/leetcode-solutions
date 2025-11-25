var maxRepeating = function (sequence, word) {
    let seq = sequence, w = word;       // Aliases for convenience
    let slen = seq.length;              // Length of sequence
    let wlen = w.length;                // Length of word

    let queue = [w];                    // BFS queue starts with the word itself
    let k = 0;                          // Max repeating count

    // BFS loop: process all possible repeated strings
    while (queue.length > 0) {
        let str = queue.shift();        // Take next string from queue
        let found = false;              // Reset flag for current string

        // Check if str exists as a substring in sequence using slicing
        for (let i = 0; i <= seq.length - str.length; i++) {
            if (seq.slice(i, i + str.length) === str) {
                found = true;          // Found str in sequence
                break;                 // No need to check further
            }
        }

        // If str exists in sequence, increment k and enqueue next repetition
        if (found) {
            k++;                        // Increase repeating count
            queue.push(str + w);        // Next repeated string
        }
    }

    return k;                           // Return max repeating value
};


var maxRepeating2222 = function(sequence, word) {
    let k = 0;
    let str = word;
    while (sequence.includes(str)) {
        k++;
        str += word;
    }
    return k;
};
