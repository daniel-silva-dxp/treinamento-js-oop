const alunos = [
	{ nome: 'Daniel', nota: 7.3, bolsista: false },
	{ nome: 'Flávia', nota: 9.2, bolsista: true },
	{ nome: 'Matheus', nota: 9.8, bolsista: false },
	{ nome: 'Fabiana', nota: 8.7, bolsista: true }
];

// Desafio 1: Verificar se todos os alunos são bolsistas
console.log(alunos.map((aluno) => aluno.bolsista).reduce((result, bolsista) => result && bolsista));

// Desafio 2: Verificar os alunos bolsistas
console.log(alunos.map((aluno) => aluno.bolsista).reduce((result, bolsista) => result || bolsista));
