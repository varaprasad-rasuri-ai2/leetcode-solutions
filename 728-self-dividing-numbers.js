var selfDividingNumbers = function(left, right) {
    let result = [];
    
    for (let num = left; num <= right; num++) {
        let temp = num;
        let isSelfDividing = true;
        
        while (temp > 0) {
            let digit = temp % 10;
            if (digit === 0 || num % digit !== 0) {
                isSelfDividing = false;
                break;
            }
            temp = Math.floor(temp / 10);
        }
        
        if (isSelfDividing) result.push(num);
    }
    
    return result;
};

var selfDividingNumbers2222 = function(left, right) {
    let result = [];
    
    for (let num = left; num <= right; num++) {
        let digits = num.toString().split('');
        if (digits.every(d => d !== '0' && num % parseInt(d) === 0)) {
            result.push(num);
        }
    }
    
    return result;
};
