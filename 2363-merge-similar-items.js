var mergeSimilarItems = function (items1, items2) {
    let o = {}

    // Combine both arrays and sum weights for each value
    for (let [v, w] of [...items1, ...items2]) {
        o[v] = (o[v] || 0) + w  // If value exists, add weight; else initialize
    }

    let res = []

    // Convert object entries back into array format [value, totalWeight]
    for (let [v, sw] of Object.entries(o)) {
        res.push([+v, sw])  // Convert key from string to number
    }

    // Sort by value in ascending order
    return res.sort(([v1], [v2]) => v1 - v2)
};
