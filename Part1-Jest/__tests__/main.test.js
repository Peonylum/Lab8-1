const main = require('../assets/scripts/main');

test('test input greater than 66', () => {
    expect(main(100)).toContain("3");
});

test('test input less greater than 33', () => {
    expect(main(44)).toContain("2");
});

test('test input greater than 0', () => {
    expect(main(5)).toContain("1");
});

test('Equal to 0', () => {
    expect(main(0)).toContain("0");
});

