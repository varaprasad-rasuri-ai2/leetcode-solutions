// Function to calculate the minimum number of sensors needed
// n = number of rows
// m = number of columns
// k = sensor coverage radius
var minSensors = function (n, m, k) {

    // Each sensor covers a square of size (2k + 1) x (2k + 1)
    const coverageSize = 2 * k + 1;

    // Calculate how many sensor rows are needed to cover all n rows
    // Math.ceil ensures partial coverage still requires a full sensor
    let rowsNeeded = Math.ceil(n / coverageSize);

    // Calculate how many sensor columns are needed to cover all m columns
    let colsNeeded = Math.ceil(m / coverageSize);

    // Total sensors needed is rows × columns
    return rowsNeeded * colsNeeded;
};
