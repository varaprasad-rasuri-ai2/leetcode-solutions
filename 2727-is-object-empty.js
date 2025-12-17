// Function to check if an object is empty
var isEmpty = function(obj) {
    // Object.keys(obj) returns an array of the object's own enumerable property names
    // If the length is 0, the object has no properties
    if (Object.keys(obj).length === 0) {
        return true;
    }

    // If there is at least one key, the object is not empty
    return false;
};

// Alternative approach using a for...in loop
var isEmpty222 = function(obj) {
    // Loop through the object's enumerable properties
    for (let key in obj) {
        // If any property is found, the object is not empty
        return false;
    }

    // If the loop never runs, the object has no properties
    return true;
};
