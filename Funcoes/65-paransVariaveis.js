//arguments é um array interno de uma função

function soma() {
	let soma = 0;
	for (let i in arguments) {
		soma += arguments[i];
	}

	return soma;
}

console.log(soma());
console.log(soma(1, 1.1, 3.26).toFixed(2));

//Parâmeto Padrão

function soma1(a, b, c) {
	a = a || 1;
	b = b || 2;
	c = c || 3;
	return a + b + c;
}

console.log(`Sem parâmetos: ${soma1()}`, `Com um parâmetro: ${soma1(3)}`, `Com três parâmetros: ${soma1(1, 3, 5)}`);

//OU
function soma2(a, b, c) {
	a = a !== undefined ? a : 1;
	b = 1 in arguments ? b : 1;
	c = isNaN(c) ? 1 : c;
	return a + b + c;
}

console.log(
	`Sem parâmetos: ${soma2()}`,
	`Com um parâmetro: ${soma2(5)}`,
	`Com três parâmetros: ${soma2(5, 3, 5)}`,
	`Com três parâmetros: ${soma2(0, 0, 0)}`
);

//OU

function soma3(a = 1, b = 5, c = 6) {
	return a + b + c;
}

console.log(
	`Sem parâmetos: ${soma3()}`,
	`Com um parâmetro: ${soma3(5)}`,
	`Com três parâmetros: ${soma3(5, 3, 5)}`,
	`Com três parâmetros: ${soma3(0, 0, 0)}`
);
