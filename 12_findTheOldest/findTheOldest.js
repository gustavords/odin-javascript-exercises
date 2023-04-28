const findTheOldest = function (array) {

    //loop array object
    //get birth and date, calculate age into array
    //set object to oldest variable
    //compare that object age to current object age
    //if older place into oldest variable
    //returns object
    
    // let currentYear = new Date().getFullYear()
    // let oldest = 0;
    // let oldestPerson = {};

    // for (let object of array) {
    //     let age = object.yearOfDeath - object.yearOfBirth;
    //     if (object.yearOfDeath === undefined) {
    //         age = currentYear - object.yearOfBirth;
    //         console.log(`this bitch is alive:` + age);
    //     }
    //     console.log(age);
    //     if (age > oldest) {
    //         oldest = age;
    //         for (let key in object) {
    //             oldestPerson[key] = object[key];
    //         }
    //         console.log(`new oldest: ` + age);
    //     }
    // }

    // return oldestPerson;


    //also works

    let currentYear = new Date().getFullYear()
    
    let map = array.map((key) => {
        if(!(`yearOfDeath`in key)){
             key.yearOfDeath = currentYear;
        } 
        key.age = key.yearOfDeath - key.yearOfBirth;
        return key;
    });
    
    // console.log(map);
    
    let reduce = map.reduce((comparison, current) =>{
        if(comparison.age < current.age) comparison = current;
        return comparison;
    });
    
    return reduce;




};

// Do not edit below this line
module.exports = findTheOldest;
