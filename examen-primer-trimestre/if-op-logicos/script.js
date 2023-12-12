/**
 * En el Directorio if-op-logicos tiene la estructura básica de un HTML, deberá crear un fichero llamado script.js,
 *  enlazarlo al archivo HTML y crear el siguiente programa:
Escribirá una función llamada saludarSegunHora(), en ella deberá instanciar un objeto de la clase Date() 
que es un objeto predefinido de JavaScript, este objeto tiene un método llamado getHours() que devuelve la hora actual 
en formato numérico.
Deberá programar una serie de sentencias condicionales que saluden al usuario según sea la hora:  5 – 12 “buenos días”;
12 – 18 “buenas tardes” y lo demás “buenas noches”.
El saludo se debe escribir sobre el documento HTML utilizando JavaScript dentro de etiquetas de párrafo.
 */


function saludarSegunHora() { // creamos una funcion que se llamara saludarSegunHora
    let fecha = new Date(); // declaramos una variable que va almacenar la fecha y la hora completa
    let hora = fecha.getHours(); // declaramos una variable que va almcenar solamente la hora de la variable fecha;
    if (hora >= 5 && hora <= 12) { // indicamos si la hora esta dentro del rango de las 5 hasta 12 nos mostrara el console
        console.log("Buenos dias"); // nos mostrara un mensaje en la consola
    } else if (hora >= 12 && hora <= 18) {// indicamos si la hora esta dentro del rango de las 12 hasta 18 nos mostrara el console, en caso contrario el otro console
        console.log("Buenas tardes");// nos mostrara un mensaje en la consola
    } else {
        console.log("Buenas noches");// nos mostrara un mensaje en la consola
    }
};
