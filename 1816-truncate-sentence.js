var truncateSentence = function(s, k) {
    // Step 1: Split the sentence into an array of words
    let words = s.split(' '); // e.g. "Hello world how are you" → ["Hello", "world", "how", "are", "you"]
    
    // Step 2: Take only the first k words
    let firstKWords = words.slice(0, k); // e.g. if k = 3 → ["Hello", "world", "how"]
    
    // Step 3: Join them back into a string with spaces
    let result = firstKWords.join(' '); // → "Hello world how"
    
    // Step 4: Return the truncated sentence
    return result;
};
