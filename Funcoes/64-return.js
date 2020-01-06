// Função sem parâmetro e sem retorno
function fun1() {
	console.log('Olá Mundo');
}

fun1();

//Função com parâmetro e sem retorno
function soma(a, b) {
	console.log(a + b);
}

soma(10, 5);

//Função sem parâmetro e com retorno
function fun2() {
	return `Função sem parâmetro e com retorno`;
}

console.log(fun2());

//Função com parâmetro e com retorno
function soma2(a, b) {
	return `Soma: ${a + b}`;
}

console.log(soma2(20, 15));

function area(largunda, altura) {
	const area = largunda * altura;
	if (area > 20) {
		console.log(`Valor acima do permitido: ${area}m2`);
	} else {
		return area;
	}
}

console.log(`Area: ${area(2, 2)}`);
console.log(`Area: ${area(2, 230)}`);
