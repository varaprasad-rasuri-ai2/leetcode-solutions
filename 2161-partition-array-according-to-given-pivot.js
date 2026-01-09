// Rearranges the array so that:
// 1) All elements less than pivot come first
// 2) All elements equal to pivot come next
// 3) All elements greater than pivot come last
// The relative order within each group is preserved
var pivotArray = function (a, pivot) {
    // Collect all elements smaller than the pivot
    let smallerEles = a.filter(x => x < pivot);

    // Collect all elements equal to the pivot
    let equalEles = a.filter(x => x === pivot);

    // Collect all elements greater than the pivot
    let biggerEles = a.filter(x => x > pivot);

    // Combine all three groups into a single array
    return [...smallerEles, ...equalEles, ...biggerEles];
};
