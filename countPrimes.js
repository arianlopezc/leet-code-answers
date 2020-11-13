/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let primes = new Array(n).fill(true);
    primes[0] = false, primes[1] = false;
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (primes[i] === true) {
            for (let j = i**2; j < n; j += i) { 
                primes[j] = false;
            }
        }
    }
    return primes.reduce((prev, curr) => curr ? prev + 1 : prev + 0);
};

console.log(countPrimes(10));