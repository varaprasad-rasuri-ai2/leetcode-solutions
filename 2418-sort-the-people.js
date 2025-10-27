// Function to sort people's names in descending order of their heights
var sortPeople = function (names, heights) {
    return names
        // Step 1: Combine each name with its corresponding height
        // Example: names = ["Alice", "Bob", "Charlie"]
        //          heights = [165, 180, 175]
        // After map: [ ["Alice", 165], ["Bob", 180], ["Charlie", 175] ]
        .map((_, i) => [names[i], heights[i]])

        // Step 2: Sort the array of [name, height] pairs by height in descending order
        // Compare the second element (height) of each pair
        .sort((a, b) => b[1] - a[1])

        // Step 3: Extract only the names from the sorted pairs
        // Example after sort: [ ["Bob", 180], ["Charlie", 175], ["Alice", 165] ]
        // After map: ["Bob", "Charlie", "Alice"]
        .map(([name]) => name)
};
