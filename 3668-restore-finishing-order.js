var recoverOrder = function (finishOrderIds, friends) {
    let result = []
    
    finishOrderIds.forEach((id, index) => {
        if (friends.includes(id)) {
            result.push(id)
        }
    })

    return result
};
