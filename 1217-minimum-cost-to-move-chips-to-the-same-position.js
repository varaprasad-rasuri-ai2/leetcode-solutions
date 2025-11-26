var minCostToMoveChips = function (position) { 
    let se = 0   // number of chips at even positions
    let so = 0   // number of chips at odd positions

    // Count chips by parity
    for (let p of position) {
        if (p % 2 === 0) {
            se++       // chip is on an even position
        } else {
            so++       // chip is on an odd position
        }
    }

    // The cheapest strategy is to move all chips to any even or any odd position.
    // Moving between same-parity positions costs 0.
    // Only chips on the "other parity" cost 1 each.
    return Math.min(se, so) // minimum chips that need a +1/-1 move
};

var minCostToMoveChips3333 = function(position) {
    let evens = position.filter(x => x % 2 === 0).length;
    let odds = position.length - evens;
    return Math.min(evens, odds);
};

var minCostToMoveChips2222 = function(position) {
    const freq = { even: 0, odd: 0 };

    position.forEach(p => {
        freq[p % 2 === 0 ? "even" : "odd"]++;
    });

    return Math.min(freq.even, freq.odd);
};


