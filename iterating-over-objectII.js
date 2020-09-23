const person = {
  name: 'Ivan',
  lastName: 'Glueman',
  weightInKg: 73,
  heightInCm: 173,
  numbers: [2, 3, 98]
  };
  

for (let keyName in person) {
    if (keyName === 'numbers') {
      for (let numbers of person[keyName]) {
        console.log(numbers)
    }
  }
}



//console.log(Object.values(person));
//console.log(Object.keys(person));
//console.log(Object.keys(person), Object.values(person));