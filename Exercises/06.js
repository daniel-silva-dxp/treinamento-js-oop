// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

/**
 *
 *
 * @param {*} ci = Capital inicial
 * @param {*} tj = Taxa de juros
 * @param {*} ta = Tempo de aplicação
 */
function simples(ci, tj, ta) {
	const montante = ci * (1 + tj / 100 * (ta / 360));
	return montante.toFixed(2);
}

function composto(ci, tj, ta) {
	const montante = ci * (1 + tj / 100) ** ta;
	return montante.toFixed(2);
}

console.log(simples(70.0, 10.5, 145));
console.log(composto(100, 10, 2));
