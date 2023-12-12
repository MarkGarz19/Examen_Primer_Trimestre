/**
 * En el Directorio menu-hamburguesa tiene la estructura típica de una página web que al disminuir
 *  el tamaño de su pantalla se hace responsive y oculta el header para mostrar un menú hamburguesa alternativo.
Debe programar la funcionalidad en el archivo hamburguesa.js que realice lo siguiente:
Observe que el elemento imagen del icono de la hamburguesa tiene asignado en el media querie la clase hamburger,
sobre este elemento se debe programar un evento (implementando la función callback en formato flecha)
que al darle clic aplique la clase nav-links.active empleando el método toggle. Esto permitirá cada vez que
se ejecute cambiar de estado la visibilidad del elemento HTML, es decir, si está visible pasa a oculto y
si se encuentra oculto pasa a visible.
De esta manera se desplegará el menú alternativo en pantallas menores o iguales a 768 px.
El código debe tener además de lo anterior, una parte comentada donde se implemente la solución pero modificando 
la función callback como anónima y en notación declarativa con el identificador toggleNav()
 */

/* const Hamburger = document.querySelector('.hamburger'); // se obtiene una nodeList para todos los elementos de la clase hamburguer
const NavLinks = document.querySelector('.nav-links'); // se obtiene una nodeList para todos los elementos de la clase nav-links
Hamburger.addEventListener('click', () => { // creamos un evento para la clase Hamburguer que cuando se de click se ejecutara la funcion
    NavLinks.classList.toggle('active'); // si no hay una clase se creara una y si hay una clase se quitara esa clase
}); */

const Hamburger = document.querySelector('.hamburger'); // se obtiene una nodeList para todos los elementos de la clase hamburguer
const NavLinks = document.querySelector('.nav-links'); // se obtiene una nodeList para todos los elementos de la clase nav-links
Hamburger.addEventListener('click', callback = function () { // creamos un evento para la clase Hamburguer que cuando se de click se ejecutara la funcion llamada callback
    NavLinks.classList.toggle('active'); // si no hay una clase se creara una y si hay una clase se quitara esa clase
});