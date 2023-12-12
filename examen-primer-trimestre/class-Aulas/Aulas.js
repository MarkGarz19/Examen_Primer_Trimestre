/**
 * Escriba el código necesario para modelar cada una de las clases en un único fichero que llamará Aulas.js,
 *  el método presentarMateriales() debe estar acorde al contexto de cada clase y sus atributos 
 * (es suficiente con mostrarlos por consola con la estructura ${` … `}).
Sobrescriba el método presentarMateriales() en cada una de las clases.
Para la clase Aula se espera que retorne: “Bienvenidos al aula 1, la cual tiene capacidad para 20 personas”.
Para la clase Musica: “Bienvenidos al aula de música número 2. Hoy presentaremos los materiales necesarios
para la clase de saxofón, solamente tenemos 10 plazas”.
Para la clase Tecnologia: “Bienvenidos al aula de tecnología número 3. El día de hoy hemos comprador 20 ordenadores
adicionales para aprender a programar, en total ahora tenemos 30 estudiantes de capacidad”.
 */

class Aula { // creamos una clase llamada Aula
    constructor(numero, capacidad) { // creamos un constructor con dos parametros
        this.numero = numero; // Asignamos el valor de la propiedad
        this.capacidad = capacidad;// Asignamos el valor de la propiedad
    }
    presentarMateriales() { // creamos un metodo que se llamara presentarMateriales
        console.log(`Bienvenidos al aula ${this.numero}, la cual tiene capacidad para ${this.capacidad} personas`); // nos mostrara un mensaje en el console
    }
};

class Musica extends Aula { // creamos una clase llamada Musica que tendra herencia con la clase principal
    constructor(numero, capacidad, instrumento) {// creamos un constructor con tres parametros
        super(numero, capacidad); // llamamos a los objetos de la clase padre
        this.instrumento = instrumento;// Asignamos el valor de la propiedad
    }
    presentarMateriales() { // creamos un metodo que se llamara presentarMateriales
        console.log(`Bienvenidos al aula de música numero ${this.numero}. Hoy presentaremos los materiales necesarios
        para la clase de ${this.instrumento}, solamente tenemos ${this.capacidad} plazas`); // nos mostrara un mensaje en el console
    }
}
class Tecnologia extends Aula { // creamos una clase llamada Tecnologia que tendra herencia con la clase principal
    constructor(numero, capacidad, cantidadOrdenadores) {// creamos un constructor con tres parametros
        super(numero, capacidad); // llamamos a los objetos de la clase padre
        this.cantidadOrdenadores = cantidadOrdenadores;// Asignamos el valor de la propiedad
    }
    presentarMateriales() { // creamos un metodo que se llamara presentarMateriales
        console.log(`Bienvenidos al aula de tecnología numero ${this.numero}. EL día de hoy hemos comprado ${this.cantidadOrdenadores} ordenadores
        adicionales para aprender a programar, en total ahora tenemos ${this.capacidad} estudiantes de capacidad`); // nos mostrara un mensaje en el console
    }
}
let aula1 = new Aula(1, 20); // declaramos una variable para poner los valores especificos a la instancia
let aula2 = new Musica(2, 30, "saxofón");// declaramos una variable para poner los valores especificos a la instancia
let aula3 = new Tecnologia(3, 30, 20);// declaramos una variable para poner los valores especificos a la instancia
aula1.presentarMateriales(); // nos mostrara la informacion de la instancia
aula2.presentarMateriales();// nos mostrara la informacion de la instancia
aula3.presentarMateriales();// nos mostrara la informacion de la instancia
console.log(""); // nos mostrara un mensaje en la consola
console.log("Respuesta: extends"); // nos mostrara un mensaje en la consola