// Helper function to convert a lowercase character 'a'–'z' to its alphabet index (0–25)
const char2Index = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0)


// Function to count how many unique Morse code transformations exist among a list of words
var uniqueMorseRepresentations = function (words) {
    // List of Morse code representations for each letter 'a' to 'z'
    let morseCodes = [
        ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---",
        "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-",
        "..-", "...-", ".--", "-..-", "-.--", "--.."
    ]

    // Create a Set to store unique Morse code transformations
    // (A Set automatically ignores duplicates)
    let set = new Set()

    // Loop through each word in the input array
    for (let w of words) {
        // Initialize an empty string to build the Morse code transformation
        let transformation = ''

        // For each character in the word, find its Morse code equivalent and append it
        for (let ch of w) {
            transformation += morseCodes[char2Index(ch)]
        }

        // Add the completed transformation to the Set
        set.add(transformation)
    }

    // The size of the Set equals the number of unique Morse code transformations
    return set.size
};
