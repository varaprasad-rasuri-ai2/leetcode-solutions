// Returns the maximum number of containers you can have
// n: number of rows
// w: weight of each container
// maxWeight: total weight capacity
var maxContainers = function (n, w, maxWeight) {
    // Maximum possible containers by grid size
    const maxByCount = n * n;

    // Maximum possible containers by weight capacity
    const maxByWeight = Math.floor(maxWeight / w);

    // Actual limit is whichever is smaller
    return Math.min(maxByCount, maxByWeight);
};
