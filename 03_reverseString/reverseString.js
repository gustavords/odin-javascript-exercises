const reverseString = function (str) {
    let reverseStr = ``;
    let n = str.length - 1 ;
    do{
        reverseStr += str.charAt(n);
        n--;
    }while(n >= 0);
    
    return reverseStr;

    // return str.split(``).reverse().join(``)  <-- cleaner and the way it was intended
};

// Do not edit below this line
module.exports = reverseString;
