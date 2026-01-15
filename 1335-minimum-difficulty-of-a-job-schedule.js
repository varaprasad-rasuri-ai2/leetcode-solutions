var minDifficulty222 = function (jobDifficulty, totalDays) {
    const n = jobDifficulty.length;

    // If there are fewer jobs than days, it's impossible
    // because each day must have at least one job
    if (n < totalDays) return -1;

    // Memoization table:
    // memo[pos][daysLeft] stores the minimum difficulty
    // starting from job index `pos` with `daysLeft` days remaining
    const memo = new Array(n)
        .fill(0)
        .map(() => new Array(totalDays + 1));

    // Recursive DFS function
    // pos       → current job index
    // daysLeft → number of days remaining
    const dfs = (pos, daysLeft) => {

        // Base case:
        // If this is the last day, we must take all remaining jobs.
        // The cost is the maximum difficulty among those jobs.
        if (daysLeft === 1) {
            return Math.max(...jobDifficulty.slice(pos));
        }

        // Return cached result if already computed
        if (memo[pos][daysLeft] !== undefined) {
            return memo[pos][daysLeft];
        }

        let todayCost = 0;        // Max difficulty for today's jobs
        let minTotalCost = Infinity;

        // Try assigning jobs from pos to i for today
        // Ensure enough jobs remain so that each future day has at least one job
        for (let i = pos; i + daysLeft <= n; i++) {

            // Update today's difficulty (max of assigned jobs)
            todayCost = Math.max(todayCost, jobDifficulty[i]);

            // Recursively compute the cost for remaining jobs and days
            const cost = todayCost + dfs(i + 1, daysLeft - 1);

            // Track the minimum total difficulty
            minTotalCost = Math.min(minTotalCost, cost);
        }

        // Store result in memo table and return
        return (memo[pos][daysLeft] = minTotalCost);
    };

    // Start DFS from job 0 with all days available
    return dfs(0, totalDays);
};


var minDifficulty = function(jobDifficulty, d) {
    const n = jobDifficulty.length;
    if (n < d) return -1;

    let prev = Array(n + 1).fill(Infinity);
    prev[0] = 0;

    for (let day = 1; day <= d; day++) {
        let curr = Array(n + 1).fill(Infinity);
        for (let i = day; i <= n; i++) {
            let maxVal = 0;
            for (let j = i - 1; j >= day - 1; j--) {
                maxVal = Math.max(maxVal, jobDifficulty[j]);
                curr[i] = Math.min(curr[i], prev[j] + maxVal);
            }
        }
        prev = curr;
    }

    return prev[n];
};

