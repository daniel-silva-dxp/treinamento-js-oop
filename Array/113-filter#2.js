Array.prototype.filters = function(callback) {
	const arr = [];
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this)) {
			arr.push(this[i]);
		}
	}

	return arr;
};

const produtos = [
	{ nome: 'Notebook', preco: 2499, fragil: true },
	{ nome: 'iPad Pro', preco: 4199, fragil: true },
	{ nome: 'Copo de Vidro', preco: 12.49, fragil: true },
	{ nome: 'Copo de Plástico', preco: 18.99, fragil: false }
];

console.log(produtos.filters((p) => p.preco >= 500 && p.fragil));
