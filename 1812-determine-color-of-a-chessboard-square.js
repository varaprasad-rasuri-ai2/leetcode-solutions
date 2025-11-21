var squareIsWhite = function(coordinates) {
    // Convert column letter to number: 'a' -> 1, 'b' -> 2, ..., 'h' -> 8
    let col = coordinates.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    
    // Convert row character to number
    let row = parseInt(coordinates[1]);

    // If the sum of row and column is even, the square is white
    return (col + row) % 2 === 0;
};
