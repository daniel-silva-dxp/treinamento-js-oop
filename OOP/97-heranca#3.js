function MeuObj() {}


const obj1 = new MeuObj()
const obj2 = new MeuObj()

MeuObj.prototype.nome = 'Anônimo'
MeuObj.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

console.log(obj1.nome)
obj2.falar()

// Criando objetos de forma literal e atribuindo seu protótipo
const obj3 = {}
obj3.__proto__ = MeuObj.prototype 

obj3.nome = 'Daniel'

console.log(obj3)
obj3.falar()