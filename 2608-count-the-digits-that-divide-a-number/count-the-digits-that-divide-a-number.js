var countDigits = function (num) {
    /*
        num // 123
        ''+num // '123'
        ...('' + num) // '1','2','3'
        [...('' + num)] // ['1','2','3']
        [...('' + num)].map(x => +x) // [1, 2, 3]
    */
    let digits = [...('' + num)].map(x => +x)

    let count = 0
    for (let d of digits) {
        if (num % d === 0) {
            count++
        }
    }
    return count
};
