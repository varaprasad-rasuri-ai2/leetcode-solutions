var intersect = function (a, b) {
    // Sort both arrays
    a.sort((a, b) => a - b)
    b.sort((a, b) => a - b)

    // Array to store intersection result
    let res = []

    // Continue while both arrays have elements
    while (a.length && b.length) {
        // Compare last elements of both arrays
        if (a.at(-1) === b.at(-1)) {
            res.push(a.at(-1))
            a.pop() // Remove last element from a
            b.pop() // Remove last element from b
        }
        // Remove larger element to move closer
        else if (a.at(-1) > b.at(-1)) {
            a.pop()
        } else {
            b.pop()
        }
    }

    // Return the intersection array
    return res
};


var intersect33333333 = function (a, b) {
    // Lengths of both arrays
    let m = a.length
    let n = b.length

    // Sort both arrays in ascending order
    a.sort((a, b) => a - b)
    b.sort((a, b) => a - b)

    // Array to store intersection result
    let res = []

    // Two pointers i and j to traverse both arrays
    for (let i = 0, j = 0; i < m && j < n;) {
        // If elements are equal, it's part of the intersection
        if (a[i] === b[j]) {
            res.push(a[i])
            i++
            j++
        }
        // Move pointer in the smaller element's array
        else if (a[i] < b[j]) {
            i++
        } else {
            j++
        }
    }

    // Return the intersection array
    return res
}

var intersect222222 = function (a, b) {
    // Sort both arrays
    a.sort((a, b) => a - b)
    b.sort((a, b) => a - b)

    // Array to store intersection result
    let res = []

    // Continue while both arrays have elements
    while (a.length && b.length) {
        // If first elements match, add to result
        if (a[0] === b[0]) {
            res.push(a[0])
            a.shift() // Remove first element from a
            b.shift() // Remove first element from b
        }
        // Remove smaller element to move forward
        else if (a[0] < b[0]) {
            a.shift()
        } else {
            b.shift()
        }
    }

    // Return the intersection array
    return res
};

