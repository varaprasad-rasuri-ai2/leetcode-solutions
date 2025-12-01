var maxDistinct = function (s) { 
    // The goal: split the string into the maximum number of substrings
    // such that each substring starts with a *distinct* character.
    //
    // Key observation:
    // - Each substring contributes exactly ONE starting character.
    // - We cannot reuse the same starting character twice.
    // - Therefore, the maximum possible number of substrings equals
    //   the number of distinct characters in the entire string.
    //
    // Example: "abab"
    // Distinct characters = { 'a', 'b' } → answer = 2.
    //
    // Example: "aaaa"
    // Distinct characters = { 'a' } → answer = 1.
    //
    // So we simply count unique characters in the string.

    let set = new Set(s);  // Collect all unique characters
    return set.size;       // Each unique character can start exactly one substring
};
