var reachNumber = function (target) {
    // Since moving left or right is symmetric,
    // we only need to consider the absolute value
    target = Math.abs(target)

    // sum keeps track of the total distance covered so far
    // step represents the current move number (1, 2, 3, ...)
    let sum = 0, step = 0;

    /*
      Keep taking steps until:
      1. The total sum is at least the target, AND
      2. The difference between sum and target is even
         (so we can flip directions of some steps to reach exactly target)
    */
    while (sum < target || (sum - target) % 2 !== 0) {
        step++          // take the next step
        sum += step     // add the step length to the total sum
    }
    
    // step is the minimum number of moves needed to reach target
    return step
};
