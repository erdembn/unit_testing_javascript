const addJs = require('./addJs');


describe('adds two numbers', () => {
    test('this function adds numbers', () => {
        expect(addJs(2, 2)).toEqual(4)
        expect(addJs(3, 2)).toEqual(5)
    })
})