// Object used as an in-memory store to map short keys to long URLs
let obj = {};

// Function to encode (shorten) a long URL
var encode = function (longUrl) {
    // Generate a unique key using the current timestamp (in milliseconds)
    // Example: 1767913791459
    let shortUrlKey = new Date().getTime();

    // Store the mapping of the generated key to the original long URL
    obj[shortUrlKey] = longUrl;

    // Return the generated key as the "short URL"
    return shortUrlKey;
};

// Function to decode (retrieve) the original long URL
var decode = function (shortUrlKey) {
    // Look up and return the long URL associated with the given key
    return obj[shortUrlKey];
};
