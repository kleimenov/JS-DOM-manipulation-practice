/* Puzzle #1
In this exercise, we will be given array of 2 or more numbers.
We will then have to find the two largest numbers in that
array, and sum the together
*/

let arr = [10, 4, 34, 6, 92, 2];
[4,10,6,34]
//I will use insertion sort approach for sorting array and when array will be sorted,
//I just add last two elemets to each other 
const sumLargestNumbers = function(data) {
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
For this puzzle, we will be adding only the numbers in the array which match the given condition
*/


const conditonaSum = function(values, condition) {
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
  console.log(conditonaSum(values, condition))


//or

  const conditonaSum = function(values, condition) {
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
  console.log(conditonaSum(values, condition))

//or

  const conditionalSum = function(values, condition) {
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
In this puzzle, we will be counting number of vowels that appear in a given string. For 
this exercise, consider the following to be vowels: a. e. i, o and u.
*/


let numberOfVowels = function(data){

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

 
var numberOfVowels = function(data){

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
 
console.log(numberOfVowels(newW))
