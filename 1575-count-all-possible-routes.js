var countRoutes222 = function (locations, source, destination, totalFuel) {
    // Modulo value to prevent integer overflow
    const MOD = 1e9 + 7;

    // Number of cities
    const n = locations.length;

    // Memoization map:
    // key = "currentCity,remainingFuel"
    // value = number of valid routes from this state
    const memo = new Map();

    // DFS function to count routes
    function dfs(u, remainingFuel) {
        // Create a unique key for memoization
        const key = `${u},${remainingFuel}`;

        // If this state has already been computed, return cached result
        if (memo.has(key)) return memo.get(key);

        // If we are already at the destination, count this as one valid route
        // (even if we continue traveling afterward)
        let validRouteCount = u === destination ? 1 : 0;

        // Try traveling to every other city
        for (let v = 0; v < n; v++) {
            if (v !== u) {
                // Fuel needed to travel from city u to city v
                const currentRequiredFuel = Math.abs(locations[u] - locations[v]);

                // If we have enough fuel to reach city v
                if (currentRequiredFuel <= remainingFuel) {
                    // Recursively count routes from city v with remaining fuel
                    validRouteCount += dfs(
                        v,
                        remainingFuel - currentRequiredFuel
                    );

                    // Apply modulo to keep values within limits
                    validRouteCount %= MOD;
                }
            }
        }

        // Store result in memo before returning
        memo.set(key, validRouteCount);
        return validRouteCount;
    }

    // Start DFS from the source city with the given total fuel
    return dfs(source, totalFuel);
};

var countRoutes = function(locations, start, finish, fuel) {
    const n = locations.length;
    const MOD = 1000000007; // MOD = 10^9 + 7


    // memo[i][f] = number of ways to reach `finish`
    // when currently at city `i` with `f` fuel remaining
    const memo = Array.from({ length: n }, () => Array(fuel + 1).fill(-1));

    function dfs(i, f) {
        // If fuel goes negative, this route is invalid
        if (f < 0) return 0;

        // If already computed, return cached result
        if (memo[i][f] !== -1) return memo[i][f];

        // If we are already at the finish city,
        // this is one valid route (even if we move later)
        let res = (i === finish) ? 1 : 0;

        // Try moving to every other city
        for (let j = 0; j < n; j++) {
            if (j === i) continue; // cannot stay in the same city

            // Fuel cost to move from city i to city j
            const cost = Math.abs(locations[i] - locations[j]);

            // Only move if we have enough fuel
            if (f >= cost) {
                // Add all routes starting from city j
                // with remaining fuel after the move
                res = (res + dfs(j, f - cost)) % MOD;
            }
        }

        // Store result in memo and return
        return memo[i][f] = res;
    }

    // Start DFS from the starting city with full fuel
    return dfs(start, fuel);
};

