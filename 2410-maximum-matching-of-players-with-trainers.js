cl = console.log
var matchPlayersAndTrainers = function (players, trainers) {
    cl({ players, trainers })

    // Step 1: Sort both arrays in ascending order
    players.sort((a, b) => a - b)
    trainers.sort((a, b) => a - b)
    cl({ players, trainers })

    let playerIndex = 0 // pointer for players array

    // Step 2: Iterate through each trainer
    for (let t of trainers) {
        // If current trainer can handle this player
        if (playerIndex < players.length && t >= players[playerIndex]) {
            playerIndex++ // assign trainer to player, move to next player
        }
    }

    cl({ playerIndex })
    // Step 3: return number of players successfully matched
    return playerIndex
};


var matchPlayersAndTrainers222 = function(players, trainers) {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);

    let player = 0;

    for (let trainer of trainers) {
        if (player < players.length && trainer >= players[player]) {
            player++;
        }
    }

    return player;
}
