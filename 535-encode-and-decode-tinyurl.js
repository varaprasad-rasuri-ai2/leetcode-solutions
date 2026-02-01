
/*
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

*/

// Hash map to store shortUrl -> longUrl mapping
let map = new Map();

// Counter used to generate unique short URLs
let id = 0;

var encode = function (longUrl) {
    // Convert the current ID to a string to form the short URL
    const shortUrl = id.toString();

    // Store the mapping from short URL to the original long URL
    map.set(shortUrl, longUrl);

    // Increment ID for the next encode operation
    id++;

    // Return the generated short URL
    return shortUrl;
};

var decode = function (shortUrl) {
    // Retrieve and return the original URL using the short URL
    return map.get(shortUrl);
};

