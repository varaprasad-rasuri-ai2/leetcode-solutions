
cl = console.log
var sortSentence = function (s) {
    cl(s) // Debug: print the original shuffled sentence
    
    // Step 1: Split the sentence into words
    // Example: "is2 sentence4 This1 a3" -> ["is2", "sentence4", "This1", "a3"]
    // Step 2: Sort the words by the last character (which indicates the position)
    // Step 3: Remove the position number from each word using slice(0, -1)
    // Step 4: Join the words back into a sentence with spaces
    cl(s
        .split(' ')                                  // split into words
        .sort((a, b) => a[a.length - 1] - b[b.length - 1]) // sort by last character (position)
        .map(w => w.slice(0, -1))                    // remove the last character (the position)
        .join(' '))                                  // join words back into a sentence
    
    // Final return: returns the reconstructed sentence
    return s
        .split(' ')
        .sort((a, b) => a[a.length - 1] - b[b.length - 1]) // sort words by position
        .map(w => w.slice(0, -1))                    // remove position numbers
        .join(' ');                                  // join words into final sentence
};
