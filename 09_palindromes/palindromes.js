const palindromes = function (str) {
    //take string convert to Array
    let arr = [...str];
    let arrStuff = [];
    let arrClean = [];
    
    //remove spaces, puntuations and capital-letters into another array 
    //anything that is not gets pushed into another array
    for(let i = 0; i <= arr.length - 1; i++){
      if(arr[i].match(/[^a-zA-Z]/)){
        //console.log(` arr[${i}]= ${arr[i]}`);
        arrStuff.push([arr[i], i]);
      }
      else if(arr[i].match(/[A-Z]/)){
        //console.log(` arr[${i}]= ${arr[i]}`);
        arrStuff.push([arr[i], i]);
        arrClean.push(arr[i].toLowerCase());
      }
      else{
        arrClean.push(arr[i]);
      }
    }
    
    //reverse the array without stuff to an array
    let reverseClnArr = arrClean.reverse();
    
    //place stuff array into the new reverse clean array
    //loop through the stuff array and splice into the reverse clean array
    //x[i][1] //index
    //x[i][0] //value
    for(let i = 0; i <= arrStuff.length - 1; i++){
      if(arrStuff[i][0].match(/[A-Z]/)){
        //replaces
        reverseClnArr.splice(arrStuff[i][1], 1, arrStuff[i][0])
      }
      else{
        //adds into
        reverseClnArr.splice(arrStuff[i][1], 0, arrStuff[i][0])
      }
    }
    
    //compare added reversed array to the initial string
    //if same return true
    let reversedStr = reverseClnArr.join(``);
    //console.log(reversedStr);
    //console.log(arrStuff);
    return (reversedStr === str) ? true : false;
  };
   

// Do not edit below this line
module.exports = palindromes;
