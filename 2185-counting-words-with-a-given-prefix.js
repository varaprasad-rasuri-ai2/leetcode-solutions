var prefixCount = function (words, pref) {
    let cc = 0                 // Counter to keep track of how many words start with 'pref'
    for (let w of words) {     // Loop through each word in the array
        if (w.startsWith(pref)) {  // Check if the word starts with the prefix 'pref'
            cc++                 // Increment counter if it does
        }
    }
    return cc                   // Return the total count
};
