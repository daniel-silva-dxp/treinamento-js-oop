//arguments é um array interno de uma função

function soma () {
    let soma = 0
    for(let i in arguments) {
        soma += arguments[i]
    }

    return soma
}

console.log(soma())
console.log(soma(1, 1.1, 3.26).toFixed(2))