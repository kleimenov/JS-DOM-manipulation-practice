const person = {
    name: 'Ivan',
    lastName: 'Glueman',
    weightInKg: 73,
    heightInCm: 173,
  };


  //forEach() function works just with arrays that is why we cannot implement this method to object directly.
  //little tricky cover object to array and after that implement forEach. It is one solution but it isn't perfect way.
 /*
  person.forEach(function(name){
     console.log(name);
 })
 */

//we have an option how to iterete over object use C-style loop and we can get access 
//try to get access to keys in object (loop through object)
for (let values in person) {
    console.log(person[values]);
}
//try to get access to keys value pairs
for (let values in person) {
     console.log(values, person[values]);
 }
 

 