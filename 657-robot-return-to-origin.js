// Shortcut for console.log (used for debugging)
let cl = console.log;

// Function to check if the robot returns to the origin (0,0)
var judgeCircle = function (moves) {
    // Length of the moves string
    let n = moves.length;
    // cl({ moves, n });

    // 'up' tracks vertical movement (U = +1, D = -1)
    // 'down' tracks horizontal movement (R = +1, L = -1)
    let up = 0, down = 0;
    // cl({ up, down });

    // Loop through each move character
    for (let ch of moves) {
        switch (ch) {
            case 'U': 
                up++;      // Move up
                break;
            case 'D': 
                up--;      // Move down
                break;
            case 'R': 
                down++;    // Move right
                break;
            case 'L': 
                down--;    // Move left
                break;
            default:
                // Do nothing for invalid characters
        }
    }

    // If both vertical and horizontal movements cancel out,
    // the robot is back at the origin
    if (up === 0 && down === 0) {
        return true;
    } else {
        return false;
    }
};

var judgeCircle222 = function (moves) {
    // Length of the moves string
    let n = moves.length;
    cl({ moves, n });

    // Counters for each direction
    let U = 0, D = 0, L = 0, R = 0;
    cl({ U, D, L, R });

    // Count occurrences of each move
    for (let ch of moves) {
        switch (ch) {
            case 'U': 
                U++;    // Count up moves
                break;
            case 'D': 
                D++;    // Count down moves
                break;
            case 'R': 
                R++;    // Count right moves
                break;
            case 'L': 
                L++;    // Count left moves
                break;
            default:
                // Ignore invalid characters
        }
    }

    // Robot returns to origin if:
    // Up moves equal down moves AND
    // Left moves equal right moves
    if (U === D && L === R) {
        return true;
    } else {
        return false;
    }
};



