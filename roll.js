let numberOfDice = 2;
let numberOfSides = 6;

console.log(rollDice());

function rollDice() {
    let result = [ 0, 0 ];
    for (let i = 0; i < numberOfDice; i++) {
        result[i] = 1 + Math.floor(Math.random() * numberOfSides);
    }

    return result;
}