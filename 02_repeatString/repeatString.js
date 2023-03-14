const repeatString = function (str, num) {
    let j = ""
        ;
    if (num >= 0) {
        for (let i = 1; i <= num; i++) {
            j += str
        }
    } else {
        j = 'ERROR';
    }
    return j;
};

// Do not edit below this line
module.exports = repeatString;
