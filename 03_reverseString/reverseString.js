const reverseString = function (str) {
    let reverseStr = ``;
    let n = str.length - 1 ;
    do{
        reverseStr += str.charAt(n);
        n--;
    }while(n >= 0);
    
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
