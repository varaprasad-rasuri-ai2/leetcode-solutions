var serialize = function (root) {
    // Convert the tree (or any JS object) into a JSON string.
    // Assumes `root` is structured in a way that JSON.stringify can handle
    // (i.e., no functions, circular references, etc.).
    return JSON.stringify(root);
};

var deserialize = function (str) {
    // Convert the JSON string back into a JS object/tree.
    // The structure will match whatever was passed to serialize.
    return JSON.parse(str);
};
