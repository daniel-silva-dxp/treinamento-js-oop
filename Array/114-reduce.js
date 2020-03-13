const alunos = [
	{ nome: 'Daniel', nota: 7.3, bolsista: false },
	{ nome: 'Flávia', nota: 9.2, bolsista: true },
	{ nome: 'Matheus', nota: 9.8, bolsista: false },
	{ nome: 'Fabiana', nota: 8.7, bolsista: true }
];

console.log(alunos.map((a) => a.nota));

const result = alunos.map((a) => a.nota).reduce((acumulador, atual) => {
	console.log(acumulador, atual);
	return acumulador + atual;
});

// reduce() de um array de arrays
const arr = [ [ 0, 1 ], [ 2, 3 ], [ 4 ], [ 5 ] ];
const arrConcat = arr.reduce((acumulador, atual) => acumulador.concat(atual));

console.log(arr);
console.log(arrConcat);

// Contando valores iguais em um objeto
const names = [ 'Daniel', 'Matheus', 'Flávia', 'Daniel', 'Daniel', 'Flávia' ];
const contedNames = names.reduce((acumul, current) => {
	if (current in acumul) {
		acumul[current]++;
	} else {
		acumul[current] = 1;
	}
	return acumul;
}, {});

console.log(contedNames);

// Agrupando objetos por uma propriedade
const pessoas = [ { nome: 'Alice', idade: 21 }, { nome: 'Max', idade: 20 }, { nome: 'Jane', idade: 20 } ];

function groupFor(objArr, propertie) {
	return objArr.reduce((acc, obj) => {
		let key = obj[propertie];
		if (!acc[key]) {
			acc[key] = [];
		}
		acc[key].push(obj);
		return acc;
	}, {});
}

console.log(groupFor(pessoas, 'idade'));
