const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

Array.prototype.maps = function(callback) {
    const arr = []
    for( let i = 0; i < this.length; i++ ){
        arr.push(callback(this[i], i, this))
    }

    return arr
}

const result = carrinho.maps((e) => {
    let element = JSON.parse(e)
    return element.preco
})

console.log(result)