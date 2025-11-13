var sortArrayByParity = function (a) {
    // The goal is to move all even numbers to the front of the array
    // and all odd numbers to the back, preserving relative order of parity.
    
    return a.sort(
        (a, b) =>
            // If a is even, assign 0; if a is odd, assign 1
            (a % 2 === 0 ? 0 : 1) -
            // If b is even, assign 0; if b is odd, assign 1
            (b % 2 === 0 ? 0 : 1)
    );
};
