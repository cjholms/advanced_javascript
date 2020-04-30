import convert from '../src/roman_numeral_converter'

describe('Roman numeral converter', () => {
    it('will return 6 given vi', () => {
        let actual = convert('vi');
        expect(actual).toEqual(6);
    });

    it('will return 34 given xxxiv', () => {
        let actual = convert('xxxiv');
        expect(actual).toEqual(34);
    });

    it('will return 49 given xlix', () => {
        let actual = convert('xlix');
        expect(actual).toEqual(49);
    });

    it('will return 478 given cdlxxviii', () => {
        let actual = convert('cdlxxviii');
        expect(actual).toEqual(478);
    });

    it('will return 1990 given mcmxc', () => {
        let actual = convert('mcmxc');
        expect(actual).toEqual(1990);
    });

    it('will return 2016 given mmxvi', () => {
        let actual = convert('mmxvi');
        expect(actual).toEqual(2016); });
});