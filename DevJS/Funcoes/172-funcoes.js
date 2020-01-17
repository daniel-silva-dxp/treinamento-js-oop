function soma(a, b) {
	return a + b;
}

console.log(soma(10, 15));

// Parâmetros variáveis
function arr() {
	return [ ...arguments ];
}

console.log(arr(7, 5, 3.2));

function sum() {
	let result = 0;
	for (let i in arguments) {
		result += arguments[i];
	}

	return result;
}

console.log(sum(1, 10, 25, -76.25));
