/*
let arr = ['clean', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'];
let threshold = 0.5;

const checkAir = function (samples, threshold) {
  let cntDirty = 0;
  let airPollution = 0;

  for(let i = 0; i < samples.length; i++) {
    if(samples[i] === "dirty") {
        cntDirty++;}
  }
  airPollution = (cntDirty/samples.length).toPrecision(2);
  return airPollution < threshold ? "Clean" : "Polluted";
}
console.log(checkAir(arr, threshold))
*/

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

console.log(charCounter(stringNew))


