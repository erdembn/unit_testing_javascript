const loopTrough = require('./loopJs')

//testing a function that loop trought an array
//and console logging it's elements

test('this function loop trough an array and console log it', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    listA = [1,2,3]
    loopTrough(listA)
    expect(consoleSpy).toHaveBeenCalledWith(1)
    expect(consoleSpy).toHaveBeenCalledWith(2)
    expect(consoleSpy).toHaveBeenCalledWith(3)
})



