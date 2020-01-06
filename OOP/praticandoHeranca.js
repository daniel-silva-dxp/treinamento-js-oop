const Robo = function() {
	let status = 'Desligado';
	let trocarStatus = function(novoStatus) {
		if (status === 'Ligado') {
			status = novoStatus;
		}
	};
	this.ligar = function() {
		if (status === 'Desligado') {
			status = 'Ligado';
		} else {
			console.log(`O robô já está ${status}`);
		}
	};
	this.desligar = function() {
		trocarStatus('Desligar');
	};
	this.getStatus = function() {
		return status;
	};
	this.andar = function() {
		trocarStatus('Andando');
	};
	this.correr = function() {
		trocarStatus('Correndo');
	};
	this.pular = function() {
		if (status === 'Andando') {
			trocarStatus('Pulando');
		}
	};
};

const RoboLutador = function() {
	this.nome = 'Robo1';
	this.atacar = function(robo) {
		console.log(`Atacar ${robo}`);
	};
};

const RoboDefensor = function() {
	this.nome = 'Robo2';
	this.defender = function(ataque) {
		console.log(`Defender ataque do ${ataque}`);
	};
};

RoboLutador.prototype = new Robo();
RoboDefensor.prototype = new Robo();

const roboLutador = new RoboLutador();
const roboDefensor = new RoboDefensor();

console.log(roboLutador.getStatus());
console.log(roboDefensor.getStatus());

roboLutador.ligar();
roboDefensor.ligar();

roboLutador.atacar(roboDefensor.nome);
roboDefensor.defender(roboLutador.nome);
