const removeFromArray = function (a, b) {
    const newArr = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            continue;
        } else {
            newArr.push(a[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
