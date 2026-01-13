/*
LeetCode 1411: Number of Ways to Paint N × 3 Grid

Idea:
Each row of the grid can only be painted in two valid pattern types:

1) ABA kind:
   - First and third cells have the same color
   - Middle cell has a different color
   - Example: R G R
   - Total possible for one row = 6

2) ABC kind:
   - All three cells have different colors
   - Example: R G Y
   - Total possible for one row = 6

We use Dynamic Programming where:
- ABAkind = number of ways the grid ends with an ABA-pattern row
- ABCkind = number of ways the grid ends with an ABC-pattern row
*/

var numOfWays222 = function (n) {
    const MOD = 10 ** 9 + 7;

    // Base case: n = 1
    // 6 ABA patterns + 6 ABC patterns
    let ABAkind = 6;
    let ABCkind = 6;

    if (n === 1) return (ABAkind + ABCkind) % MOD;

    /*
    Transition rules (derived by checking valid color placements):

    If previous row is ABA:
        - Can form 3 new ABA rows
        - Can form 2 new ABC rows

    If previous row is ABC:
        - Can form 2 new ABA rows
        - Can form 2 new ABC rows
    */

    for (let i = 2; i <= n; i++) {
        // New ABA rows formed
        let newABA_fromABA = 3 * ABAkind;
        let newABA_fromABC = 2 * ABCkind;

        // New ABC rows formed
        let newABC_fromABA = 2 * ABAkind;
        let newABC_fromABC = 2 * ABCkind;

        // Update counts for current row
        let totalNewABA = newABA_fromABA + newABA_fromABC;
        let totalNewABC = newABC_fromABA + newABC_fromABC;

        ABAkind = totalNewABA % MOD;
        ABCkind = totalNewABC % MOD;
    }

    // Total ways = ending with either ABA or ABC pattern
    return (ABAkind + ABCkind) % MOD;
};

var numOfWays = function(n) {
    // Modulo value as required by the problem
    const MOD = 10 ** 9 + 7;
    // const MOD = 1e9 + 7;

    /*
        For n = 1:
        aba → patterns like A B A (6 ways)
        abc → patterns like A B C (6 ways)
    */
    let aba = 6, abc = 6;

    /*
        Build the solution row by row
        i represents the current row number
    */
    for (let i = 2; i <= n; i++) {

        /*
            Transition rules:
            - From aba: 3 new aba + 2 new abc
            - From abc: 2 new aba + 2 new abc
        */
        let newAba = (3 * aba + 2 * abc) % MOD;
        let newAbc = (2 * aba + 2 * abc) % MOD;

        // Update states for the current row
        aba = newAba;
        abc = newAbc;
    }

    // Total ways = ending with either aba or abc pattern
    return (aba + abc) % MOD;
};

