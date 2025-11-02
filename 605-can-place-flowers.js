/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    // Loop through each plot in the flowerbed
    for (let i = 0; i < flowerbed.length; i++) {

        // Check if the current plot is empty (0)
        if (flowerbed[i] === 0) {

            // Check if the left plot is empty or if we are at the first position
            let leftEmpty = (i === 0) || (flowerbed[i - 1] === 0)

            // Check if the right plot is empty or if we are at the last position
            let rightEmpty = (i === flowerbed.length - 1) || (flowerbed[i + 1] === 0)

            // If both left and right are empty (or out of bounds), we can plant a flower here
            if (leftEmpty && rightEmpty) {
                flowerbed[i] = 1 // Plant a flower (mark it as occupied)
                n--              // Decrease the number of flowers we still need to plant
            }
        }

        // If we've already planted all required flowers, we can return early
        if (n <= 0) return true
    }

    // If the loop finishes and we still have flowers left to plant, return false
    return false
};
