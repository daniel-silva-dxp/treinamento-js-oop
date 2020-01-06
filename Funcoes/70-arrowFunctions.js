// Função
let dobro = function(a) {
	return 2 * a;
};

// OU - Arrow function

dobro = (a) => {
	return 2 * a;
};

// OU - Arrow function reduzida
dobro = (a) => 2 * a;

console.log(dobro(Math.PI));

// Outro exeplo de Arrow function
let ola = function() {
	return 'Olá';
};

ola = () => 'Olá';

function Pessoa() {
	this.idade = 0;

	setInterval(() => {
		this.idade++;
		console.log(this.idade);
	}, 1000);
}

//new Pessoa

//Escopo com Arrow
let compraraComThis = function(param) {
	console.log(this === param);
};

compraraComThis(global);

const obj = {};
compraraComThis = compraraComThis.bind(obj); // Mudando a referência do this
compraraComThis(global);
compraraComThis(obj);

let comparaComThisArrow = (param) => console.log(this === param);
comparaComThisArrow(global);

comparaComThisArrow = comparaComThisArrow.bind(obj); // Em arrow o bind não muda a referência do this
comparaComThisArrow(obj);
