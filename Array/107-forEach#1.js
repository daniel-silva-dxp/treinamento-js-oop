const aprovados = [ 'Daneil', 'Matheus', 'Flávia', 'Fabiana' ];

aprovados.forEach(function(element, index) {
	aprovados.sort();
	console.log(`${index + 1}- ${element}`);
});

//OU

aprovados.forEach((element) => console.log(element));

//OU
aprovados.forEach((element, index, array) => console.log(`${index + 1}) ${element} no array: ${array}`));
