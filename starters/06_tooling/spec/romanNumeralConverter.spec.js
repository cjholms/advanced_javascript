import convert from '../src/roman_numeral_converter'

describe('Roman numeral converter', () => 
{ it('will return 1 given i', () => {
    let actual = convert('i');
    expect(actual).toEqual(1); });

    it('will return 4 given iv', () => {
    let actual = convert('iv');
    expect(actual).toEqual(4); });

    it('will return 10 given x', () => {
        let actual = convert('x');
        expect(actual).toEqual(10); });

    it('will return 34 given xxxiv', () => {
        let actual = convert('xxxiv');
        expect(actual).toEqual(34); });
});