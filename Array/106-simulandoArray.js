const quaseArray = {0: 'Daniel', 1: 'Matheus', 2: 'Flávia'}

console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const mueArray = ['Silva', 'Santos']

console.log(quaseArray.toString(), mueArray)