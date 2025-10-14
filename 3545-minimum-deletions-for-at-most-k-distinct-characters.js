/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function(s, k) {
    var o={}
    for(ch of s) {
        o[ch] = (o[ch] || 0 ) +1
    }
    let vas = [...Object.values(o)].sort((a,b)=> b-a)
    let newVas = vas.slice(k)
    return newVas.reduce((s,x) => s+x, 0)
    
};
