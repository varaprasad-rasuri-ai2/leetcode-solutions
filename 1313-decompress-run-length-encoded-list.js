var decompressRLElist = function (nums) {
    // Get the total number of elements in the encoded list
    let n = nums.length;

    // Initialize an array to store the decompressed result
    let res = [];

    // Loop through the list in steps of 2, since each pair represents [frequency, value]
    for (let i = 0; i < n; i += 2) {
        // Destructure the pair: f = frequency, v = value
        let [f, v] = [nums[i], nums[i + 1]];

        // Add 'v' to the result 'f' times
        while (f--) {
            res.push(v);
        }
    }

    
    // Return the fully decompressed list
    return res;
};
