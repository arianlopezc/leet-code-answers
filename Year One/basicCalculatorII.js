/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s.replace(/\s/g, '');
    let num = ""
    let calc = [];
    let prevSign = '+'
    for (let i=0;i<s.length;i++) {
        if (!isNaN(s[i])) {
            num+=s[i];
        }
        if (isNaN(s[i]) || i == s.length-1) {
            if (prevSign == "+") {
                calc.push(Number(num));
            } else if (prevSign == "-") {
                calc.push(Number(-num));
            } else if (prevSign == "*") {
                calc.push(Math.floor(calc.pop()*num));
            } else {
                calc.push(Math.trunc(calc.pop()/num))
            }
            prevSign = s[i];
            num="";
        }
    }
    return calc.reduce((a,b)=>a+b);
};