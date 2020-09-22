let array = [5, 4, 6];

const main = function(arr) {
    return arr[0];
}

const assertFunc = function(actualValue, expectedValue){
    return actualValue === expectedValue ? console.log(`Assertion passed: ${actualValue}  === ${expectedValue}`) : console.log(`Assertion failed: ${actualValue}  !== ${expectedValue}`);
}
assertFunc(main(array), 3);