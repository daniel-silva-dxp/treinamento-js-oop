const carro = {
    modelo: 'New Fiesta', 
    preco: 41000,
    proprietario: {
        nome: 'Daniel',
        idade: 32,
        endereco: {
            logradouro: 'Rua RADL',
            numero: 100,
            bairro: 'Cidade Miguel Badra',
            cidade: 'Suzano',
            estado: 'SP'
        }
    },
    condutores: [{
        nome: 'Daniel',
        idade: 32
    }, {
        nome: 'Flávia',
        idade: 25
    }],
    calcularValorDoSeguro: {}
}

console.log(carro)