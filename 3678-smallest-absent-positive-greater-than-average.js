let cl = console.log  // Shortcut for console.log, makes debugging easier

var smallestAbsent = function (nums) {
    let values = new Set(nums)  // Convert array to Set for O(1) lookups
    let l = nums.length         // Store the length of the input array
    let numsAvg = 0             // Initialize variable to store the average
    let sum = 0                 // Initialize variable to store the sum of all numbers
    // cl({ nums, values, l })

    // Sum all numbers in the array
    for (let i = 0; i < nums.length; i++) {
        // cl({ val: nums[i] })
        sum += nums[i]
    }

    // Compute integer average of the array using Math.floor
    numsAvg += Math.floor(sum / l)
    // cl({ numsAvg })

    let max = Math.max(l, numsAvg)  // This variable is not really used for anything meaningful
    // cl({ max })

    let sortedNums = nums.sort((a, b) => a - b)  // Sort array in ascending order
    // cl({ sortedNums })

    // Start searching for the smallest positive integer absent in the array
    let leastPosNum = Math.floor(numsAvg) + 1  // Start from average + 1 (unusual choice)

    if (leastPosNum <= 0) {  // Ensure we start from at least 1
        leastPosNum = 1
    }

    // Keep incrementing until we find a number not in the set
    while (values.has(leastPosNum)) {
        leastPosNum++
    }

    // cl({ leastPosNum })
    return leastPosNum  // Return the smallest absent positive integer
};
