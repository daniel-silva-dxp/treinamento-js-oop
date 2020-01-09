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
