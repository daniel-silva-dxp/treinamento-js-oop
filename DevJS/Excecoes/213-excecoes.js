//Entendendo tratamento de erros com
//try, catch e throw

function tratarErro(erro) {
	throw `Erro na execução`;
}

function imprimirNome(obj) {
	try {
		// Tratar um possível erro
		console.log(obj.name.toUpperCase() + '!!!');
	} catch (e) {
		//Lançar o tipo de erro
		tratarErro(e);
	} finally {
		//Sempre será executado
		console.log('Finally');
	}
}

const obj = { name: 'Daniel Silva' };

imprimirNome(obj);

const videos = [];
videos[1] = [];
videos[1]['nome'] = 'Fullmetal Alchemist';
videos[1]['categoria'] = 'Anime';

function getVideo(video) {
	try {
		console.log(video[0]['nome']);
	} catch (error) {
		console.log(`Error: ${error.getMessage()}`);
	}
}

var tanque = 999;
var abastecer = function() {
	if (tanque < 1000) {
		tanque++;
	} else {
		throw { message: 'Tanque ja esta cheio' };
	}
};
try {
	abastecer();
	abastecer();
} catch (e) {
	console.log(e.message);
}
