// const ferrari = {
//     modelo: 'F40',
//     velMax: 324
// }

// const volvo = {
//     modelo: 'V40',
//     velMax: 200
// }

// console.log(ferrari.__proto__) // Acessando o atributo prototype do objeto
// console.log(ferrari.__proto__ === Object.prototype)

// function MeuObj(){}

// Cadeia de protótipos
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B' };
const filho = { __proto__: pai, attr3: 'C' };
console.log(filho.attr1, filho.attr2, filho.attr3);

const carro = {
	velAtual: 0,
	velMax: 200,
	acelerarMais(delta) {
		if (this.velAtual + delta <= this.velMax) {
			this.velAtual += delta;
		} else {
			this.velAtual = this.velMax;
		}
	},
	status() {
		return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
	}
};

const ferrari = {
	modelo: 'F40',
	velMax: 324
};

const volvo = {
	modelo: 'V40',
	status() {
		return `${this.modelo}: ${super.status()}`;
	}
};

Object.setPrototypeOf(ferrari, carro); // Estabelecendo uma relação de protótipo (Ferrari tem carro como proptótipo)
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());
