var isPowerOfThree = function (num) {
    // Try increasing powers of 3 starting from 3^0 = 1
    // Stop when 3^x exceeds num
    for (let x = 0; 3 ** x <= num; x++) {

        // If any power of 3 equals num,
        // then num is a power of three
        if (3 ** x === num) {
            return true
        }
    }

    // If no power of 3 matches num
    return false
};


