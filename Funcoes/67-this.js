//This e a função bind
const pessoa = {
	saudacao: 'Boa tarde!',
	falar() {
		console.log(this.saudacao);
	}
};

pessoa.falar();

const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa); // bind() - Amarra o resultado do método ao objeto de origem
falarDePessoa();

function Pessoa() {
	this.idade = 0;
	const self = this;
	setInterval(
		function() {
			self.idade++;
			console.log(self.idade);
		} /*.bind(this)*/,
		1000
	);
}
