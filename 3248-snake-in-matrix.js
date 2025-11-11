var finalPositionOfSnake = function (n, commands) {
    // Start position of the snake (top-left corner)
    let i = 0, j = 0;

    // Loop through each command in the array
    for (let ch of commands) {
        // Use the first letter to determine direction
        switch (ch[0]) {
            case 'U': i--; break; // Move up: decrease row
            case 'D': i++; break; // Move down: increase row
            case 'L': j--; break; // Move left: decrease column
            case 'R': j++; break; // Move right: increase column
        }
    }

    // Final position in 1D form (row * n + col)
    return i * n + j;
};
