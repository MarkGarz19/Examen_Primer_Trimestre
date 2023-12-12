/**
 * En el Directorio datos-estudiante deberá crear un script que pregunte su nombre, apellidos, su edad y
 *  el ciclo formativo que cursa. Los mostrará en la página web.
 * Cada dato debe ser preguntado en una ventana emergente distinta
 *  y mostrarlo en una línea distinta, en el campo del ciclo deberá mostrar el texto por defecto “DAW”.
 */
let nombre = prompt("Introduzca tu nombre:"); // Declaramos una varible que nos mostrara una ventana emergente para rellenar datos
let apelllidos = prompt("Introduzca tus apellidos:")// Declaramos una varible que nos mostrara una ventana emergente para rellenar datos
let edad = prompt("Introduzca tu edad:");// Declaramos una varible que nos mostrara una ventana emergente para rellenar datos
let ciclo = prompt("Cual es tu ciclo formativo?", "DAW");// Declaramos una varible que nos mostrara una ventana emergente para rellenar datos y por defecto estara el texto DAW
alert(`Estudiante: ${nombre} ${apelllidos} que tiene ${edad} años y su ciclo formativo es ${ciclo}`); // Nos mostrara una ventana emergente la informacion de los datos que hemos rellenado con un boton aceptar