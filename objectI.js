

const person = {
  name: 'Ivan',
  lastName: 'Glueman',
  fullName: function() {
      console.log(`${this.name} ${this.lastName}`);
  },
  weightInKg: 73,
  heightInCm: 173,
  heightInInches: function(heightInCm) {
    console.log(Math.floor(`${this.heightInCm}` / 2.54));
    }
};

//person.fullName();    

//person.heightInInches(); 

//declare an object with the new  ES6
let cat = 'Meow';
let dog = 'Woff';
let bird = 'Peet peet';

let animalSounds = {
  cat, 
  dog,
  bird,
}


let animalSoundsI = {
  cat: cat,
  dog: dog,
  bird: bird,
}

console.log(animalSounds, animalSoundsI)