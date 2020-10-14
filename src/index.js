module.exports = function reverse (n) {
    let result = 0;
    if (n > 0) {
        while (n > 0) {
            result = result * 10 + n % 10;
            n = Math.floor(n / 10);
        }
        return result;
    }
    else {
        while (Math.abs(n) > 0) {
            result = result * 10 + Math.abs(n) % 10;
            n = Math.floor(Math.abs(n) / 10);
        }
        return result;
    }

}
