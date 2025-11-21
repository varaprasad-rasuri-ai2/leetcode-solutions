var mySqrt = function (x) {
    let i;

    // Loop starting from 0, increasing i while i*i is <= x
    for (i = 0; i * i <= x; i++) {
        // empty loop body — all the work happens in the condition
    }

    // When the loop stops, i*i > x, so the correct integer sqrt is i - 1
    return i - 1;
};
