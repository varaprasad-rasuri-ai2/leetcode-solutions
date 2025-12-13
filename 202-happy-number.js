// Returns the sum of squares of digits of a number
const getDigitsSquareSum = (n) => {
    let res = 0

    // Process each digit of the number
    while (n > 0) {
        // Get last digit
        let d = n % 10

        // Add square of the digit
        res += d * d

        // Remove last digit
        n = Math.trunc(n / 10)
    }

    return res
}

var isHappy = function (n) {
    // Set to store numbers we've already seen
    // Helps detect cycles
    let set = new Set()

    // Continue until n becomes 1 (happy number)
    while (n !== 1) {
        // Get sum of squares of digits
        let res = getDigitsSquareSum(n)

        // If we've seen this number before,
        // a cycle exists → not a happy number
        if (set.has(n)) {
            return false
        }

        // Mark current number as visited
        set.add(n)

        // Move to the next number in the sequence
        n = res
    }

    // If we reach 1, it's a happy number
    return true
};

var isHappy222 = function(n) {
    const seen = new Set()

    while (n !== 1) {
        if (seen.has(n)) return false
        seen.add(n)

        n = n
            .toString()
            .split('')
            .reduce((sum, d) => sum + (d * d), 0)
    }

    return true
}
