// Function to count how many stones are also jewels
var numJewelsInStones = function (jewelTypes, stones) {
    // Initialize counter to store number of jewels found in stones
    let count = 0;

    // Loop through each character (stone) in the 'stones' string
    for (let stone of stones) {
        // Check if this stone is one of the jewel types
        if (jewelTypes.includes(stone)) {
            // If yes, increment the count
            count++;
        }
    }

    // Return the total count of jewels found
    return count;
};
