var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let targetMeet = 0
    hours.forEach((hour) => {
        hour >= target ? targetMeet++ : targetMeet
    })
    return targetMeet
};
