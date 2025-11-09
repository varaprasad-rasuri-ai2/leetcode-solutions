var earliestTime = function (tasks) {
    let finishTimes = tasks.map(([start, duration]) => start + duration) // Calculate finish time for each task
    return Math.min(...finishTimes)                                     // Return the earliest finish time
};
