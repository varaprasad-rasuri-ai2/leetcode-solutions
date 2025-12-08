// Convert a number to binary, reverse the binary string, and convert back to a number
const nBinaryReverse = (n) => {
    // Convert number to binary string (e.g., 6 -> "110")
    let binaryStr = n.toString(2);

    // Reverse the binary string (e.g., "110" -> "011")
    let binaryStrRev = binaryStr.split("").reverse().join("");

    // Convert reversed binary string back to decimal (e.g., "011" -> 3)
    return +binaryStrRev;
};

var sortByReflection = function (nums) {
    // Sort numbers by:
    // 1. Their reversed-binary value (ascending)
    // 2. If tied, the original number (ascending)
    nums.sort((a, b) =>
        nBinaryReverse(a) - nBinaryReverse(b) || a - b
    );

    // Return the sorted array
    return nums;
};


