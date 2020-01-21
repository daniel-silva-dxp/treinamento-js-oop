/** 
 * ABSTRAÇÃO (Entidade, Identidade, Características, Ações)
*/
class Conta {
	constructor() {
		this.agencia = 1075;
		this.conta = 8351125;
		this.saldo = 50;
		this.limite = 450;
	}

	depositar(valor) {
		this.saldo += valor;
	}

	sacar(valor) {
		if (valor > this.saldo + this.limite) {
			console.log(`Saldo insuficiente. Valor solicitado: ${valor}, Saldo: ${this.saldo}`);
		}

		this.saldo -= valor;
	}

	consultarSaldo() {
		return `Saldo: R$${this.saldo.toFixed(2)}, Limite: R$${this.limite.toFixed(2)}`;
	}
}

const conta = new Conta();
console.log(conta.consultarSaldo());

conta.depositar(100);
console.log(conta.consultarSaldo());
