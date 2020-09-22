let array = [2, -1, 4 , 6 , 9]

const minimumValue = function(arr){
    let minValue = 0;
    for(let value = 0; value < arr.length; value++){
        minValue = arr[value] < minValue ? arr[value]: minValue;
    }
    return minValue;
}

console.log(minimumValue(array));