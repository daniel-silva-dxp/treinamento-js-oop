//Função em JS é First-Class Object (Citizens)
//Higher-order function

//Função literal
function fun1() {
	return `Função literal`;
}

//Expressão de função
var fun2 = function() {
	return `Expressão de função`;
};

//Função em um array
const array = [
	function(a, b) {
		return a + b;
	},
	fun1,
	fun2
];
console.log(array[0](2, 3));

//Função como atributo

const Pessoa = {
	nome: 'Daniel',
	idade: 32,
	falar: function(msg) {
		console.log(msg);
	}
};

Pessoa.falar('Olá Mundo!!!');

// Passar função como param
function run(fun) {
	fun();
}

run(function() {
	console.log('CALLBACK');
});

// Funções podem retornar/conter outras funções
function soma(a, b) {
	return function(c) {
		console.log(a + b + c);
	};
}

soma(2, 3)(5);
