class CuentaGitHub { // creamos una clase llamada CuentaGitHub
    constructor(datosJSON) { // creamos un constructor con un parametro que sera para la cadena JSON
        let datos = JSON.parse(datosJSON); // declaramos una variable que cuando se introduzca una cadena JSON se cambiara a objeto
        this.login = datos.login; // Asignamos valor de la propiedad
        this.id = datos.id;// Asignamos valor de la propiedad
        this.email = datos.email;// Asignamos valor de la propiedad
        this.public_repos = datos.public_repos; // Asignamos valor de la propiedad
    }
    datosRecibidos() { // creamos un metodo llamado datosRecibidos
        console.log(`El Usuario de GitHub ${this.login} tiene un id ${this.id} cuyo correo es ${this.email} y tiene ${this.public_repos} respositorios públicos`); // nos mostrara un mensaje en la consola
    }
}

let cadenaJSOn = '{"login":"Markus Garzon","id":"MarkGarz19","email":"markus_19@hotmail.es","public_repos":"5"}'; // declaramos una variable que va almacenar la cadena JSON
let cadena = new CuentaGitHub(cadenaJSOn); // declaramos una variable para que cambia la varibale que tiene una cadenaJSOn a objeto
cadena.datosRecibidos(); // nos mostrara la informacion de la instancia