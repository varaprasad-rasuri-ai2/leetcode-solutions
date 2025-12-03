var countOperations = function (num1, num2) {
    // This will store how many subtraction operations we perform
    let count = 0;

    // Continue as long as BOTH numbers are non-zero
    while (num1 !== 0 && num2 !== 0) {

        // If num1 is larger, subtract num2 from num1
        if (num1 >= num2) {
            num1 -= num2;
        } 
        // Otherwise, subtract num1 from num2
        else {
            num2 -= num1;
        }

        // Each subtraction counts as one operation
        count++;
    }

    // When either number becomes zero, return the number of operations
    return count;
};
