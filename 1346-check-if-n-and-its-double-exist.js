let cl = console.log
var checkIfExist = function (a) {
    for (let i = 0; i < a.length; i++) {
        let x = a[i]

        // check if 2*x exists using indexOf
        let j = a.indexOf(2 * x)
        if (j !== -1 && i !== j) {
            return true
        }

        // check if 2*x exists using lastIndexOf (handles duplicates)
        let k = a.lastIndexOf(2 * x)
        if (k !== -1 && i !== k) {
            return true
        }
    }
    return false
};
var checkIfExist222 = function(a) {
    a.sort((x, y) => x - y);
    let n = a.length;

    for (let i = 0; i < n; i++) {
        let left = 0, right = n - 1;

        while (left < right) {
            if (a[left] * 2 === a[right] && left !== right) return true;
            else if (a[left] * 2 < a[right]) right--;
            else left++;
        }
    }
    return false;
}
