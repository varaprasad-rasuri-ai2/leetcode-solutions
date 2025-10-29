const decodeMessage = (key, message) => {
    const mapping = new Map();
    let nextCharCode = 'a'.charCodeAt(0); // Start from 'a'

    // Create the substitution mapping from key
    for (const char of key) {
        if (char !== ' ' && !mapping.has(char)) {
            mapping.set(char, String.fromCharCode(nextCharCode));
            nextCharCode++;
        }
    }

    // Decode the message
    let decoded = '';
    for (const char of message) {
        decoded += char === ' ' ? ' ' : mapping.get(char);
    }

    return decoded;
};
