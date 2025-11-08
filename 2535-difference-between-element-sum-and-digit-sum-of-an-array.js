cl = console.log

var differenceOfSum = function (nums) {
    // Step 1️⃣: Calculate the element sum
    // The element sum is just the sum of all numbers in the array
    let elementSum = nums.reduce((sum, num) => sum + num, 0)
    // cl(elementSum) // debug: see the total of all elements

    // Step 2️⃣: Calculate the digit sum
    // For each number:
    //   - Convert it to a string
    //   - Split into digits
    //   - Convert each digit back to a number
    //   - Sum all digits across the array
    let digitSum = nums.reduce((sum, num) => {
        // convert number to string, then split digits and sum them
        let currentDigitSum = num
            .toString()
            .split('')                              // e.g. 123 → ['1', '2', '3']
            .reduce((digitSum, digit) => digitSum + parseInt(digit), 0) // sum digits
        return sum + currentDigitSum                // add to running total
    }, 0)

    // cl(digitSum) // debug: see the total of all digits

    // Step 3️⃣: Return the absolute difference between elementSum and digitSum
    return Math.abs(elementSum - digitSum)
}
