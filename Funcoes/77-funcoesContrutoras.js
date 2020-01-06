function Carro(velocidadeMaxima = 200, delta = 5) {
	let velocidadeAtual = 0;

	this.acelerar = function() {
		if (velocidadeAtual + delta <= velocidadeMaxima) {
			velocidadeAtual += delta;
		} else {
			velocidadeAtual = velocidadeMaxima;
		}
	};

	this.getVelocidadeAtual = function() {
		return velocidadeAtual;
	};
}

const uno = new Carro();
uno.acelerar();
console.log(`Velocidade do Uno: ${uno.getVelocidadeAtual()}KM/h`);

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(`Velocidade da Ferrari: ${ferrari.getVelocidadeAtual()}KM/h`);
