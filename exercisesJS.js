/*
In this exercise, we will be given array of 2 or more numbers.
We will then have to find the two largest numbers in that
array, and sum the together
*/

let arr = [10, 4, 34, 6, 92, 2];

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



let sumLargestNumbers = function(data) {
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
