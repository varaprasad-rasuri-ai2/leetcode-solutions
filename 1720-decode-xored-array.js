cl = console.log

var decode = function (encoded, first) {
    // Log input values for debugging
    cl(encoded, first)

    // Initialize result array with the first known value
    let arr = [first]

    // Reconstruct each next value:
    // Since encoded[i] = arr[i] ^ arr[i+1]
    // We get arr[i+1] = arr[i] ^ encoded[i]
    for (let i = 0; i < encoded.length; i++) {
        arr.push(arr[i] ^ encoded[i])
    }
    
    // Log the final decoded array for debugging
    cl(arr)

    // Return the decoded array
    return arr
};
