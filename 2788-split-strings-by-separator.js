var splitWordsBySeparator = function (sentenses, separator) {
    let res = []

    for (let sent of sentenses) {
        let words = sent.split(separator) // Split each sentence by the separator
        res.push(...words)                // Spread the resulting array into res
    }

    return res.filter(x => x)             // Remove any empty strings
};
