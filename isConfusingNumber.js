/**
 * @param {number} N
 * @return {boolean}
 */
var confusingNumber = function(N) {
    const map = {'0':0,'1':1,'6':9,'8':8,'9':6};
    const parsed = String(N);
    let obtained = [];
    for (let digit of parsed) {
        if (!map.hasOwnProperty(digit))
            return false;
        else
            obtained.push(map[digit]);
    }
    if (obtained.reverse().join() !== parsed)
        return true;
    else
        return false;
};

console.log(confusingNumber(916));