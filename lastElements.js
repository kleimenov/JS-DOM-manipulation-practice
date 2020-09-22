const assertFunc = function(actualValue, expectedValue){
    return actualValue === expectedValue ? console.log(`Assertion passed: ${actualValue}  === ${expectedValue}`) : console.log(`Assertion failed: ${actualValue}  !== ${expectedValue}`);
}

let array = [5, 4, 6];
//let newArr;
const lastElements = function(arr){
    //newArr = array.slice(1);
   // return newArr;
   return array.slice(1);
}

assertFunc(lastElements(array), array);
assertFunc(array.length, 3);

console.log(friends);
let friends = "jjjj";
//console.log(friends)

