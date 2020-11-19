/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const result = [];
    while (asteroids.length > 0) {
        const asteroid = asteroids.pop();
        if (result.length > 0) {
            const peeked = result[0];
            if ((asteroid > 0 && peeked > 0) || (asteroid < 0 && peeked < 0) || (asteroid < 0 && peeked > 0)) {
                result.unshift(asteroid);
            } else if (Math.abs(asteroid) === Math.abs(peeked)) {
                result.shift(asteroid);
            } else if (Math.sign(asteroid) !== Math.sign(peeked)) {
                if (Math.abs(asteroid) > Math.abs(peeked)) {
                    while (result.length > 0 && Math.abs(asteroid) > Math.abs(result[0]) && Math.sign(asteroid) > Math.sign(result[0])) {
                        result.shift();
                    }
                    if (result.length === 0) {
                        result.push(asteroid);
                    } else {
                        asteroids.push(asteroid);
                    }
                }
            }
        } else {
            result.push(asteroid);
        }
    }
    return result;
};