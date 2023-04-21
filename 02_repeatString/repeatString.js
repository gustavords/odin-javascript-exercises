const repeatString = function (str, n) {
    let concatStr = ``;
    while (n > 0) {
        concatStr += str;
        n--;
    }
    
    return (n < 0) ? `ERROR` : concatStr;
};

// Do not edit below this line
module.exports = repeatString;
