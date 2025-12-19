// Shortcut for console.log (used for debugging)
let cl = console.log

// Function to check if a student attendance record is valid
var checkRecord = function (s) {
    // Object to store the frequency of each character (A, L, P)
    let freq = {}

    // Count occurrences of each character in the string
    for (let ch of s) {
        freq[ch] = (freq[ch] ?? 0) + 1
    }

    // If the student has 2 or more absences ('A'), the record is invalid
    if (freq['A'] >= 2) {
        return false
    }

    // Variable to track consecutive late ('L') days
    let lateCount = 0

    // Loop through the string again to check consecutive lates
    for (let ch of s) {
        // If the current day is late, increase the late counter
        if (ch === 'L') {
            lateCount++

            // If there are 3 or more consecutive lates, record is invalid
            if (lateCount >= 3)
                return false
        } else {
            // Reset late counter if the day is not late
            lateCount = 0
        }
    }

    // If neither rule is violated, the record is valid
    return true
}
