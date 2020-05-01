function convert(romanNumeral) {
    let total = 0;
    let previousValue = 0;
    for (const numeral of romanNumeral.split("")) {
        let currentValue = toDecimal(numeral);
        total += (previousValue < currentValue) ?
            // subtracting the previous value twice because
            // it was added in the previous iteration of the loop
            currentValue - (2 * previousValue) : currentValue;
        previousValue = currentValue;
    }
    return total;
}

function toDecimal(romanNumeral) {
    switch (romanNumeral.toLowerCase()) {
        case 'i':
            return 1;
        case 'v':
            return 5;
        case 'x':
            return 10;
        case 'l':
            return 50;
        case 'c':
            return 100;
        case 'd':
            return 500;
        case 'm':
            return 1000;
        default:
            console.warn("Unknown numeral: " + romanNumeral);
    }
}

export default convert;
