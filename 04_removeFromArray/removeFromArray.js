const removeFromArray = function (arr, ...remove) {
    // let rem = [...remove]
    // for(let i = 0; i <= arr.length - 1; i++){
    //   rem.forEach(y => {
    //     if(y === arr[i]){
    //       arr.splice(i, 1);
    //       i--;
    //     }
    //   });
    // }

    //or

    for (let i = 0; i <= arr.length - 1; i++) {
        for (let y of remove) {
            if (y === arr[i]) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
