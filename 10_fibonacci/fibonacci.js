const fibonacci = function (n) {
    let i = 1;
    let arr = [0, 1];
    if (n < 0) return `OOPS`;
    if (n === 0) return 1;

    for (; n >= arr[1]; n--) {
        arr.push(arr[i] + arr[i - 1]);
        // console.log(n)
        i++;
    }
    // console.log(arr);
    // console.log(arr[arr.length - 2]);
    return arr[arr.length - 2];
};


// Do not edit below this line
module.exports = fibonacci;