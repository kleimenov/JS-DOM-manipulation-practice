//implement function that will return random value in range from 1 to 6 like a dice

function randomIntGenerator(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

//implement fancy function that return list or dice rolls result
const diceRoller = function(amountOfRolls){
    let diceRollsResult = [];
    const min = 1;
    const max = 7;
    while(amountOfRolls > 0){
        diceRollsResult.push(randomIntGenerator(min, max))
        amountOfRolls--;
    }
    return diceRollsResult.join(',');
}


console.log(diceRoller(3));
