const sumAll = function (a, b) {
    let sum = 0;
    if (typeof (a) === 'number' && typeof (b) === 'number') {
        if (b < 0 || a < 0) {
            sum = 'ERROR';
        } else if (a < b) {
            for (let i = a; i <= b; i++) {
                sum += i;
            }
        } else if (a > b) {
            for (let i = b; i <= a; i++) {
                sum += i;
            }
        }
    } else {
        sum = 'ERROR';
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
