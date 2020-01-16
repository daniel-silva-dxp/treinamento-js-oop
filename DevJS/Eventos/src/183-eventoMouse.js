/** 
 * Eventos de mouse
 * onclick - Disparado com um clique do mouse
 * dblclick - Disparado com dois cliques do mouse
 * onmouseup - Disparado quando o clique do mouse é liberado
 * onmouseover - Disparado quando o cursor do mouse se posiciona sobre o elemento
 * onmouseout - Disparado quando o cursor do mouse sai da região do elemento
*/
const element = document.querySelector('.wrapper');
element.addEventListener('mouseout', (event) => {
	console.log(event.type);
});
