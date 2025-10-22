// Function to return the maximum achievable value of x
var theMaximumAchievableX = function (num, t) {
    // Each operation can move x and num in opposite directions (x +1, num -1), 
    // resulting in a net increase of 2 in x.
    // So, the maximum achievable x = num + 2 * t
    return num + 2 * t;
};


// Alternative version using a loop to increment num by 2 for t times
var theMaximumAchievableX22222 = function (num, t) {
    // Loop t times, adding 2 to num in each iteration
    for (let i = 1; i <= t; i++) {
        num += 2;
    }
    // Final value is the same as num + 2 * t
    return num;
};
