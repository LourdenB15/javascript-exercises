const reverseString = function (str) {
    let reverse = "";
    for (let i = 1; i <= str.length; i++) {
        const ende = str[str.length - i];
        reverse += ende;
    }
    return reverse;
};



// Do not edit below this line
module.exports = reverseString;
