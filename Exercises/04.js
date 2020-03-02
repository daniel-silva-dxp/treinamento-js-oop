// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.
function division(dividendo, divisor) {
	return `Resultado: ${Math.floor(dividendo / divisor)}, Resto ${dividendo % divisor}`;
}

console.log(division(10, 6));
