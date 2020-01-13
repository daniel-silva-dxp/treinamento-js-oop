//Desafio A-B-C
let a = 10,
	b = 20,
	c = null;

const arr = Array.of(a, b, c);

console.log(a, b, c);
c = a;
a = b;
b = c;
c = null;

console.log(a, b, c);
