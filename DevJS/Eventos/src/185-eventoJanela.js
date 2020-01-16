/** 
 * Eventos de Janela
 * onresize - Disparado quando a janela do browser é redimensionada
 * onscroll - Disparado quando o scroll do elemento é acionado
*/
window.addEventListener('resize', () => {
	console.log(window.outerWidth, window.outerHeight);
});

let position = 0;
let bool = false;

function foo(scroll_position) {
	console.log(`Position: ${scroll_position}`);
}

window.addEventListener('scroll', (e) => {
	position = window.scrollY;
	if (!bool) {
		window.requestAnimationFrame(() => {
			foo(position);
			bool = false;
		});
	}
	bool = true;
});
