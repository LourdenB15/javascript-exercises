// const removeFromArray = function (a, b) {
//     const newArr = [];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === b) {
//             continue;
//         } else {
//             newArr.push(a[i]);
//         }
//     }
//     return newArr;
// };

const removeFromArray = function () {
    const newArr = [];
    for (let i = 0; i < arguments[0].length; i++) {
        if (arguments[0][i] === arguments[1]) {
            continue;
        } else {
            newArr.push(arguments[0][i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
