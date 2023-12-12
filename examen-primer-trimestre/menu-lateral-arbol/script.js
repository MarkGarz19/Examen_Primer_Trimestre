/**
 * En el directorio menu-lateral-arbol en los archivos HTML y CSS proporcionados se puede observar que hay
 *  una serie de iconos denominados con la clase arrow, estos elementos permitirán desplegar unos submenús que 
 * tienen asignada la clase .sub-menu  y se encuentran ocultos por medio del estilo  display: none.
Se pide que por medio de un recorrido forEach se aplique a todas las flechas un evento de clic que a
todos los submenús del código le aplique la clase ‘show’ para desplegarlos.
Recomendación: tenga en cuenta que en el contexto de este código para acceder a los submenús desde 
las flechas se debe ir primero al elemento padre y posteriormente al elemento hermano, de esta manera
el objeto seleccionado será relativo a la flecha y siempre será un submenú.
Finalmente aplique la clase rotate-arrow  a las flechas con el método toggle para hacer el efecto de giro.
 */

const arrow = document.querySelectorAll('.arrow'); // se obtiene una nodelist para todos los elementos de la clase arrow
arrow.forEach(arrow => { // se iterara a cada elemento de la clase arrow
    arrow.addEventListener('click', function () { // se creara un evento para la clase arrow que cuando se haga click se ejecutara la funcion
        const submenu = this.parentElement.nextElementSibling; // el submenu se asociara a la clase flecha
        submenu.classList.toggle('show'); // cambia la visibilidad del submenu
        this.parentElement.classList.toggle('expanded'); // cambia la clase, para que gire la flecha
    })
})