const display = document.querySelector('input');
// Função que fará o calculo
function calc(type, value) {
	if (type === 'action') {
		((value) => {
			const operation = {
				C: () => (display.value = ''),
				'+': () => (display.value += value),
				'-': () => (display.value += value),
				'*': () => (display.value += value),
				'/': () => (display.value += value),
				'.': () => (display.value += value),
				'=': () => (display.value = eval(display.value))
			};
			return operation[value]();
		})(value);
	} else if (type === 'value') {
		display.value += value;
	}
}
