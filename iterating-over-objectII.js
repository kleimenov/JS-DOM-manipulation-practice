const person = {
  name: 'Ivan',
  lastName: 'Glueman',
  weightInKg: 73,
  heightInCm: 173,
  };
  
/*
for (let values in person) {
    console.log(values, person[values]);
}
*/

console.log(Object.values(person));
console.log(Object.keys(person));
console.log(Object.keys(person), Object.values(person));