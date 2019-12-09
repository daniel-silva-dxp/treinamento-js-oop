// Função sem parâmetro e sem retorno
function fun1() {
	console.log('Olá Mundo')
}

fun1()

//Função com parâmetro e sem retorno
function soma(a, b) {
	console.log(a + b)
}

soma(10, 5)

//Função sem parâmetro e com retorno
function fun2() {
	return `Função sem parâmetro e com retorno`
}

console.log(fun2())

//Função com parâmetro e com retorno
function soma2(a, b) {
	return `Soma: ${a + b}`
}

console.log(soma2(20, 15))
