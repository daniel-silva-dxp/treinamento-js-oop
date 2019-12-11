function criarPessoa() {
    return {
        nome: 'Daniel',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))

//Class

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const daniel = new Pessoa('Daniel Silva')
daniel.falar()

//Factory

const criar = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criar('Daniel')
p2.falar()
