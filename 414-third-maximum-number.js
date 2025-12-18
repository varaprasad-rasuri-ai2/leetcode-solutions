let cl = console.log

var thirdMax = function(nums) {
    let distinct = Array.from(new Set(nums)).sort((a,b) => b-a);
    return distinct.length >= 3 ? distinct[2] : Math.max(...distinct);
};


var thirdMax333 = function(nums) {
    // Create a Set to remove duplicates
    let set = new Set(nums)

    // ❌ Bug: Set does not have 'len', should be 'set.size'
    let len = set.len

    // Optional debug log
    // cl({nums, set})

    // Convert Set back to array and sort descending
    let distinct = Array.from(new Set(nums)).sort((a,b) => b-a)

    // Optional debug log
    // cl({distinct})

    // If at least 3 distinct numbers, return the third maximum
    // Otherwise, return the largest
    return distinct.length >= 3 ? distinct[2] : distinct[0]
};

var thirdMax222 = function(nums) {
    // Convert nums to Set to remove duplicates and sort descending
    let distinct = Array.from(new Set(nums)).sort((a,b) => b-a)

    // Optional debug log
    // cl({distinct})

    // If at least 3 distinct numbers, return third maximum
    // Otherwise, return the maximum
    return distinct.length >= 3 ? distinct[2] : Math.max(...distinct)
};


