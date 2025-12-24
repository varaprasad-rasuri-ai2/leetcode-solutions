let cl = console.log

var findEvenNumbers = function (digits) {
    // Set to store unique 3-digit even numbers
    let results = new Set()

    // Total number of digits
    let n = digits.length

    // Debug log (can be removed later)
    cl({ results, n })

    // Choose the hundreds digit
    for (let i = 0; i < n; i++) {
        // Hundreds digit cannot be 0
        if (digits[i] === 0) continue

        // Choose the tens digit
        for (let j = 0; j < n; j++) {
            // Cannot reuse the same digit index
            if (j === i) continue

            // Choose the ones digit
            for (let k = 0; k < n; k++) {
                // All indices must be different
                if (k === i || k === j) continue

                // Ones digit must be even
                if (digits[k] % 2 !== 0) continue

                // Form the 3-digit number
                let nums = digits[i] * 100 + digits[j] * 10 + digits[k]

                // Add to Set to avoid duplicates
                results.add(nums)
            }
        }
    }

    // Convert Set to array and sort in ascending order
    return Array.from(results).sort((a, b) => a - b)
};
