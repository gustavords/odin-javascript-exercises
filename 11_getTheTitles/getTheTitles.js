const getTheTitles = function (books) {
    const arr = [];
    books.forEach(x => {
        arr.push(x.title);
        console.log(arr)
    });
    return arr;

    // also
    // const arr2 = [];
    // for (let book of books) {
    //     if (`title` in book) {
    //             console.log(`this is the title: ` + book[`title`]);
    //             arr2.push(book[`title`]);
    //         }
    // }
    // return arr2;

    //both work

    //also
   
};

// Do not edit below this line
module.exports = getTheTitles;
