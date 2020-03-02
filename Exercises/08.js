// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).

function jogos(listaDePontuacao) {
	const list = listaDePontuacao.split(' ');
	let qtdQuebraDeRecords = 0;
	let piorJogo = 1;
	let maiorPontuacao = list[0];
	let menorPontuacao = list[0];

	for (let i = 1; i < list.length; i++) {
		if (list[i] > maiorPontuacao) {
			maiorPontuacao = list[i];
			qtdQuebraDeRecords++;
		} else if (list[i] < menorPontuacao) {
			menorPontuacao = list[i];
			piorJogo = i + 1;
		}
	}
	return [ qtdQuebraDeRecords, piorJogo ];
}

console.log(jogos('30, 40, 20, 4, 51, 25, 42, 38, 0, 56'));
