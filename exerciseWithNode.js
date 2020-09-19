/*
//Exercise #1
//Write a function that will count each character in string and return object with result

let stringNew = "I haave a cat, my cat is super cat and hi know IT!!!!"

let charCounter = function(str){
    // make an object to return at the and
    let result = {};
    // loop over string, for each character
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        //if char is a number/letter and ia a key in object, add one to count
        if(result[char] > 0) {
            result[char]++;
        }
        //if the char is a number/letter and not in object, add it tio onbecct and set value to 1
        else {
            result[char] = 1;
        };
    }
    //if character is somethinv else (space, period, etc.) don't do anything
    //return obhect at the end
    return result;
}

//console.log(charCounter(stringNew))

//modified solution
let charCounterMod = function(str) {
    // create an object, we will add countered characters here and retern it as a result at the end
    let result = {};
    // define specific variable for counting cahracters
    let cnt = 0;
    // loop odver string 
    while(cnt < str.length){
        // make each character lowercase 
        let char = str[cnt].toLowerCase();
        // check condition with regular expression tools
        if(/[a-z0-9]/.test(char)) {
            // check statement if character is into object increase counter for one elae add character
            result[char] > 0 ? result[char]++ : result[char] = 1;
        }
    //increase counter
    cnt++;
    }
    // return object as a result
    return result;
}
   
console.log(charCounterMod("Hellouuuuu777"))
//console.log(charCounterMod(stringNew)); 

//modified solutionII

let charCounterII = function(str) {
    let result = {};
    for(let char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

console.log(charCounterII("HellooooFFF"));

//modifide solutiounIII instead regular expression I will use custome function isAlphaNumeric, 
//this function will check character 

let charCounterIII = function(str){
    let result = {};
    for(let char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

function isAlphaNumeric(char){
    let code = char.charCodeAt();
    if(!(code > 47 && code < 58) && //numeric (0-9)
       !(code > 64 && code < 91) && //upper alpha (A-Z)
       !(code > 98 && code < 123)) { //lower alpha (a-z)
           return false;
       }
    return true;
}

console.log(charCounterIII('helllOOOO 8888'));
*/

