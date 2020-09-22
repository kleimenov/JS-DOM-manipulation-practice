function randomIntGenerator(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

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
