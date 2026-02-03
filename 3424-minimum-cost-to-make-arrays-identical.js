// Helper function: sum of absolute differences between two arrays
function arrayDifference(arr, brr) {
    return arr.reduce((sum, _, i) => sum + Math.abs(arr[i] - brr[i]), 0);
}

// Main function: compute minimum total cost
var minCost = function(arr, brr, k) {
    // Option 1: leave arr as-is and modify elements
    let diffAsIs = arrayDifference(arr, brr);

    // Option 2: sort arrays first to minimize element differences
    let arrSorted = [...arr].sort((a, b) => a - b);
    let brrSorted = [...brr].sort((a, b) => a - b);

    // Total cost for option 2 = sum of differences after sorting + rearrangement cost
    let diffModified = arrayDifference(arrSorted, brrSorted);

    
    // Return the minimum of the two options
    return Math.min(diffAsIs, diffModified + k);
};


var minCost222 = function(arr, brr, k) {
    const arrayDifference = (a,b) => a.reduce((sum,_,i)=>sum + Math.abs(a[i]-b[i]),0);

    let diffAsIs = arrayDifference(arr,brr);
    let diffModified = arrayDifference([...arr].sort((a,b)=>a-b), [...brr].sort((a,b)=>a-b));

    return Math.min(diffAsIs, diffModified + k);
};
