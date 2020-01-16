/** 
 * Eventos de Teclado
 * onkeydown - Disparado quando qualquer tecla do é precioanda
 * onkeypress - Disparado quando qualquer tecla do é mantida precionada
 * onkeyup - Disparado quando qualquer tecla do é liberada
*/
const input = document.querySelector('.input_field');

input.addEventListener('keydown', (event) => {
	let code = event.which || event.keyCode;
	console.log(event.type, event.which, String.fromCharCode(code));
});
