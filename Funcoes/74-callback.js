const fabricantes = [ 'Mercedes', 'Audi', 'BMW' ];

function imprimir(nome, index) {
	console.log(`${index + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);

const notas = [ 7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0 ];

// Solução sem callback
let notasBaixas = [];

for (let i in notas) {
	if (notas[i] < 7) {
		notasBaixas.push(notas[i]);
	}
}
console.log(`Resultado sem callback: ${notasBaixas}`);

// Solução com callback
notasBaixas = notas.filter((nota) => nota < 7);
console.log(`Resultado com callback: ${notasBaixas}`);
