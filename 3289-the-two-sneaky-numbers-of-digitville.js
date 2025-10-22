// Function to find the two sneaky numbers that appear twice in the array
var getSneakyNumbers = function (a) {
    // Create an object (hashmap) to store the frequency of each number
    let o = {}

    // Loop through each number in the array 'a'
    for (let x of a) {
        // For each number, increment its count in the hashmap
        // If it's not present yet, initialize it to 0 using nullish coalescing (??)
        o[x] = (o[x] ?? 0) + 1
    }

    // Initialize an empty array to hold the sneaky numbers
    let result = []

    // Loop through each key in the hashmap
    for (let x in o) {
        let count = o[x]
        
        // If the number appears exactly twice, it's one of the sneaky numbers
        if (count === 2) {
            result.push(x)
        }
    }

    // Convert the string keys from the object back to numbers and return the result
    return result.map(x => +x)
};
