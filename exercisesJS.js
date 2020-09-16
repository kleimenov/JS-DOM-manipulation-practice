/* Puzzle #1
*/

let arr = [10, 4, 34, 6, 92, 2];
[4,10,6,34]
//I will use insertion sort approach for sorting array and when array will be sorted,
//I just add last two elemets to each other 
const sumCounter = function(data) {
    for (let i = 0; i < data.length; i++) {
        let tmp = data[i];
        let previousIndex = i - 1; 
        while (previousIndex >= 0 && data[previousIndex] > tmp) {
            data[previousIndex + 1] = data[previousIndex]; 
            previousIndex-- ;
        }
        data[previousIndex + 1] = tmp;
    }
    let length = data.length;
    let firstMaxValue = data[length - 1];
    let secondMaxValue = data[length - 2];
    return firstMaxValue + secondMaxValue;
}


//sort function (insertion sort algorithm)
let sortFromGreaterToSmaller = function(data) {
    for (let i = 0; i < data.length; i++) {
        let tmp = data[i]; 
        let previousIndex = i - 1; 
        while(previousIndex >= 0 && data[previousIndex] < tmp ){
            data[previousIndex + 1] = data[previousIndex]; 
            previousIndex -- ; 
        }
        data[previousIndex + 1] = tmp;
    }
    return data;
}

//sort function (bubble sort algorithm)
let sortedArray = function(data) {
    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j <data.length; j++) {
            if(data[j] > data[j + 1]) {
                let tmp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = tmp;
            }
        }
    }
    return data;
}

//sort fucntion (heap sort algorithm)

var arrLength;
function swap(input, indexA, indexB) {
  var tmp = input[indexA];
  input[indexA] = input[indexB];
  input[indexB] = tmp;
}

function heapRoot(input, i) {
  var left = 2*i + 1;
  var right = 2*i + 2;
  var max = i;

  if(left < arrLength && input[left] > input[max]) {
    max = left;
  }
  if (right < arrLength && input[right] > input[max]) {
    max = right;
  }
  if (max != i) {
    swap(input, i, max);
    heapRoot(input, max);
  }
}

function heapSort(input) {
  arrLength = input.length;
  for(var i = Math.floor(arrLength/2); i >= 0; i--) {
    heapRoot(input, i);
  }
  for(i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    arrLength--;

    heapRoot(input, 0);
  }
}

//sort fucntion (quick sort algorithm)

function quickSort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		let left = [];
		let right = [];
		let newArray = [];
		let pivot = origArray.pop();
		let length = origArray.length;

		for (let i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
}


let testArr = [3, 0, 2, 5, -1, 4, 1 ];

let sortedArray = quickSort(testArr);
console.log(sortedArray);


/* Puzzle #2
*/


const countConditons = function(values, condition) {
    let evenNumbers = [];
    let oddNumbers = [];
    for (let i = 0; i < values.length; i++) {
      if(values[i] % 2 === 0) {
        evenNumbers.push(values[i]);
      }
      else if (values[i] %2 !== 0) {
        oddNumbers.push(values[i]);
      }
    }
    if (condition === 'even') {
      return evenNumbers.reduce(function(acc, val) { return acc + val; }, 0);
    }
    else {
      return oddNumbers.reduce(function(acc, val) { return acc + val; }, 0);
    }
  }
  
  
  let values = [1,2,3,4,5];
  let condition = 'even';
  console.log(countConditons(values, condition))


//or

  const countConditons = function(values, condition) {
    let evenNumbers = [];
    let oddNumbers = [];
    for (let i = 0; i < values.length; i++) {
      values[i] % 2 === 0 ? evenNumbers.push(values[i]) : oddNumbers.push(values[i]);
    }
    if (condition === 'even') {
      return evenNumbers.reduce(function(acc, val) { return acc + val; }, 0);
    }
    else {
      return oddNumbers.reduce(function(acc, val) { return acc + val; }, 0);
    }
  }
  
  
  let values = [1,2,3];
  let condition = 'odd';
  console.log(countConditons(values, condition))

//or

  const countConditons = function(values, condition) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < values.length; i++) {
      values[i] % 2 === 0 ? sumEven += values[i] : sumOdd += values[i];
    }
    if (condition === 'even') {return sumEven}
    else {return sumOdd};
  }


/*
Puzzle #3
*/


let vowelsCounter = function(data){

  let vawelDict = {"a": 1,"e": 2, "i": 3, "o": 4, "u": 5};
  let dataMod = data.toLowerCase(data);
  let cnt = 0;

  for(let i = 0; i < dataMod.length; i++) {
    //console.log(dataMod[i])
    if(vawelDict.hasOwnProperty(dataMod[i])) {
      cnt++; }
  }
  return cnt;
}


// or modified function with counter feature

var newW = "aNKaaaaaWRTfsReeeeeeeeeeettTTTttuuuuuuu";

 
var vowelsCounter = function(data){

  var vawelDict = {"a": 0,"e": 0, "i": 0, "o": 0, "u": 0};
  var dataMod = data.toLowerCase(data);
  var cnt = 0;

  for(var i = 0; i < dataMod.length; i++) {
    //console.log(dataMod[i])
    if(vawelDict.hasOwnProperty(dataMod[i])) {
      vawelDict[dataMod[i]] += 1;
      }
  }
  //return Object.values(vawelDict);
   return vawelDict;
}
 
console.log(vowelsCounter(newW))

/*
Puzzle #4
*/

var arrOne = [
  {word: "Moon"},
  {word: "Plate"},
  {word: "Cat"},
  {word: "Notwithstanding"}
]



const wordsLengthRadar = function(arr) {
  let maxValue = 0;
  let tmp = 0;
  let longestName = "";
  for (var i=0; i< arr.length; ++i) {
    if(arr[i].word.length > maxValue) {
      maxValue = arr[i].word.length;
      longestName = arr[i].word;
      }
    }
  return longestName;
}


/*
Puzzle #5
*/

let textStrg = "   Cat hasn't avatar   ";


const ultimateCleaner = function(text) {
  let cnt = 0;
  while(text[cnt] ===" ") {
    text = text.slice(cnt+1, text.length);
    cnt ++;
  }
  
  function backsideCleaner(text) {
    let cntBack = text.length-1;
    while(text[cntBack] ===" "){
      text = text.slice(0, cntBack);
      cntBack--;
    }
    return text;
  }
  
   function midTextCleaner(text) {
    /*for(let i = 0; i < text.length-1; i++){
      if(text[i] === " ") {
        text[i] = "%20";
      }
    }*/
    text = text.replaceAll(" ", "%20");
    return text;
  }
  
  let backCleaned = backsideCleaner(text);
  return midTextCleaner(backCleaned);
}


console.log(ultimateCleaner(textStrg));

//or
const urlCleaner = function(text) {
  return text.trim().replaceAll(" ", "%20")
}


/*
Puzzle #6
*/

let array = 
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ]

let size = "small";
const whatIsMySize = function (array, size) {
  
  let letterIndex = size.charAt(0).toUpperCase();
  let coordinateArray = [];
  let particularCoordinate = [];
  
  for (let y = 0; y < array.length; y++){
    for (let x = 0; x < array[y].length; x++){
      if(array[y][x] === "R" && (letterIndex === "M" || letterIndex === "S" || letterIndex === "R")) {
        let particularCoordinate = [];
        particularCoordinate.push(x, y);
        coordinateArray.push(particularCoordinate);
        }
      if(array[y][x] === "S" && (letterIndex === "M" || letterIndex === "S")) {
        let particularCoordinate = [];
        particularCoordinate.push(x, y);
        coordinateArray.push(particularCoordinate);
        }
      if(array[y][x] === "M" && letterIndex === "M") {
        let particularCoordinate = [];
        particularCoordinate.push(x, y);
        coordinateArray.push(particularCoordinate);
        }
      }
  }
  return coordinateArray;
}



/*
Puzzle #7
*/



let arr = ['clean', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'];
let threshold = 0.3;

const checkAir = function (samples, threshold) {
  let cntClean = 0;
  let airPollution = 0;

  for(let i = 0; i < samples.length; i++) {
    if(samples[i] === "clean") {
      cntClean++;}
  }
  airPollution = (cntClean/samples.length).toPrecision(2);
  return airPollution < threshold ? "Clean" : "Polluted";
}

console.log(checkAir(arr, threshold))

