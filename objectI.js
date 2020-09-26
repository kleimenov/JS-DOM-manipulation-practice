

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

person.fullName();    

person.heightInInches(); 

// add 

