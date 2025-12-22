// Checks if string `goal` can be obtained by rotating string `s`
var rotateString = function (s, goal) {
    let n = s.length

    // If lengths differ, rotation is impossible
    if (s.length !== goal.length) return false

    // Get the first character of the goal string
    let firstChar = goal[0]

    // Try all possible positions in `s` where `firstChar` occurs
    for (let i = 0; i < n; i++) {

        // Find the next occurrence of firstChar in `s` starting from index i
        let j = s.indexOf(firstChar, i)

        // If the character is not found, no rotation can match
        if (j === -1) return false

        // Rotate the string at position j and compare with goal
        // s.slice(j)   -> substring from j to end
        // s.slice(0,j) -> substring from start to j
        if ((s.slice(j) + s.slice(0, j)) === goal) {
            return true
        }

        // Move i to j to continue searching from the next position
        i = j
    }

    // No rotation matched the goal string
    return false
}


// Checks if string `goal` can be obtained by rotating string `s`
var rotateString2222 = function (s, goal) {
    let n = s.length

    // If lengths differ, rotation is impossible
    if (s.length !== goal.length) return false

    // Convert string to array to allow shifting
    let a = s.split("")

    // Perform at most `n` rotations
    while (n--) {

        // Move the first character to the end (left rotation by 1)
        a.push(a.shift())

        // Convert array back to string and compare with goal
        if (a.join("") === goal) {
            return true
        }
    }

    // If no rotation matches the goal string
    return false
};


