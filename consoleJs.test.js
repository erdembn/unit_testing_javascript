const consoleJs = require('./consoleJs')


test('this function just console log the argument', () => {

    const consoleSpy = jest.spyOn(console, 'log');
    consoleJs('console this')
    expect(consoleSpy).toHaveBeenCalledWith('console this')
})