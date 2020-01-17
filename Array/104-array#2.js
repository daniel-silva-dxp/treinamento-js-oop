// Array multidimensional

const carros = [];
carros['Nome'] = [ 'New Fiesta', 'New Civic', 'New Corolla', 'Golf GTI' ];
carros['Fabricantes'] = [ 'Ford', 'Honda', 'Toyota', 'Volkswagen' ];
console.log(carros);

//OU

const data = [ [ 'Banana', 'Maçã', 'Morango', 'Uva' ], [ 'Daniel', 'Flávia', 'Matheus', 'Fabiana' ] ];

console.log(data, `O ${data[1][2]} gosta de comer ${data[0][3]}`);
