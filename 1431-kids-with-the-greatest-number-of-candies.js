/**
 * @param {number[]} candies - Array where candies[i] is the number of candies the i-th kid has
 * @param {number} extraCandies - The number of extra candies available to give to each kid
 * @return {boolean[]} - Boolean array where result[i] indicates if the i-th kid can have the most candies
 */

var kidsWithCandies = function (candies, extraCandies) {
    let result = [];
    let maxCandies = Math.max(...candies); // compute once

    for (let i = 0; i < candies.length; i++) {
        result.push(candies[i] + extraCandies >= maxCandies);
    }

    return result;
};


var kidsWithCandies2222 = function (candies, extraCandies) {
    // Step 1: Initialize an empty array to store the boolean results
    let result = [];

    // Step 2: Loop through each kid in the candies array
    for (let i = 0; i < candies.length; i++) {

        // Step 3: Check if giving this kid all the extra candies makes their total
        // greater than or equal to the current maximum number of candies among all kids.
        //
        // Math.max(...candies) finds the highest current candy count.
        // candies[i] + extraCandies is this kid's new candy count.
        // If new count >= max, push true; otherwise, push false.
        result.push((candies[i] + extraCandies) >= Math.max(...candies));
    }
    
    // Step 4: Return the final boolean array
    return result;
};


