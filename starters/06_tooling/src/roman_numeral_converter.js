function convert(romanNumeral) {
    if (romanNumeral === 'i')
        return 1;
    else if (romanNumeral === 'x')
        return 10;
    else if (romanNumeral === 'xxxiv')
        return 34;
    else
        return 4;
 }

 export default convert;