const person = {
  name: 'Ivan',
  lastName: 'Glueman',
  weightInKg: 73,
  heightInCm: 173,
  numbers: [2, 3, 98],
  arrayOfObject: [{firstNumber:666, secondNumber: 777, lastNumber: 000,}]
  };
  
/*
for (let keyName in person) {
    if (keyName === 'numbers') {
      for (let numbers of person[keyName]) {
        console.log(numbers)
    }
  }
}
*/
for(let keys in person) {
  if (keys === 'arrayOfObject') {
    person[keys].forEach(function(value) {
      console.table(value)
      for (let nestValue in value) {
        console.log(value[nestValue])
      }
    })
  }
}




//console.log(Object.values(person));
//console.log(Object.keys(person));
//console.log(Object.keys(person), Object.values(person));


// bonus thing is console.table()

let array = [12,58,99,89,74,81]

console.table(array);