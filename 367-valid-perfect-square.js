var isPerfectSquare = function (num) {
    // Try every integer x starting from 1
    // Stop when x² exceeds num
    for (let x = 1; x * x <= num; x++) {

        // If square of x equals num,
        // then num is a perfect square
        if (x * x === num) {
            return true
        }
    }

    // If no integer square equals num
    return false
};


