var getSum = function (a, b) {
    // Keep looping until there is no carry left
    while (b) {

        // sumWithoutCarry: XOR gives addition without carrying
        // carry: AND finds positions where both have 1s, then shift left to apply the carry
        let [sumWithoutCarry, carry] = [a ^ b, (a & b) << 1];

        // Update a and b:
        // a becomes the partial sum
        // b becomes the carry (to be added in the next iteration)
        [a, b] = [sumWithoutCarry, carry];
    }

    // When no carry remains, 'a' holds the complete sum
    return a;
};
