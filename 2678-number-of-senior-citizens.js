// Function to count how many people are seniors (age > 60)
// Each string in the array `a` encodes person information, 
// and the age is stored in characters 11–12 (0-indexed)
var countSeniors = function (a) {
    // Initialize a counter for seniors
    let c = 0

    // Loop through each string `s` in the array `a`
    for (let s of a) {
        // Extract the substring that represents the age (characters at positions 11 and 12)
        let age = s.slice(11, 13)

        // Convert the substring to a number and check if it's greater than 60
        if (+age > 60) {
            // If yes, increment the counter
            c++
        }
    }

    // Return the total number of seniors
    return c
};
