class CuentaBancaria { // creamos una clase llamada CuentaBancaria
    constructor(nombre, dni, saldo) { // creamos un constructor con tres parametros
        this.nombre = nombre; // Asignamos un valor de la propiedad
        this.dni = dni;// Asignamos un valor de la propiedad
        this.saldo = saldo || 0;// Asignamos un valor de la propiedad o el valor sera 0 si no se introduce un valor especifico
        this.numeroCuenta = Math.floor(Math.random() * 99999999999999999999).toString().padStart(20, '0');// Asignamos un valor de la propiedad que sera un numero random que tenga el formato IBAN
    }
}

CuentaBancaria.prototype.mostrarDatos = function () { // creamos un metodo llamado mostrarDatos que se juntara con la clase constructora
    console.log(`
    Nombre: ${this.nombre}
    DNI:${this.dni}
    Número de Cuenta: ES${this.numeroCuenta}
    Saldo: ${this.saldo}€`) // nos mostrara un mensaje en la consola
}
CuentaBancaria.prototype.realizaringreso = function (monto) { // creamos un metodo llamado realizaringreso que se juntara con la clase constructora
    this.saldo += monto; // el monto se sumara al saldo
    console.log(`Ingreso de ${monto}€ se ha relizado correctamente. Nuevo saldo:${this.saldo}€`); // nos mostrara un mensaje en la consola
}

CuentaBancaria.prototype.realizarretiro = function (monto) { // creamos un metodo llamado realizarretiro que se juntara con la clase constructora
    if (monto > this.saldo) { // si el retiro es mayor que el saldo nos mostrara un console en caso contrario quitara dinero en el monto y nos dara un mensaje en la consola
        console.log("No se puede realizar esta operacion")// nos mostrara un mensaje en la consola
    } else {
        this.saldo -= monto; // el monto se quitara al saldo
        console.log(`Retiro de ${monto}€ se ha relizado correctamente. Nuevo saldo:${this.saldo}€`); // nos mostrara un mensaje en la consola
    }
}
CuentaBancaria.prototype.realizartransferencia = function (cuentaDestino, monto) { // creamos un metodo llamado realizartransferencia que se juntara con la clase constructora
    this.saldo -= monto;// el monto se quitara al saldo
    console.log(`_______________________________________________________________________________________
    Nombre: ${this.nombre}
    DNI:${this.dni}
    Número de Cuenta: ES${this.numeroCuenta}
    Saldo: ${this.saldo}€
    La transferencia de ${monto}€ se ha hecho correctamente`); // nos mostrara un mensaje en la consola
    console.log("-------------------------------------------------------------------------------------");// nos mostrara un mensaje en la consola
    if (cuentaDestino) {
        this.saldo += monto;
        cuentaDestino = cuentaDestino.mostrarDatos(); // nos mostrara toda la informacion de la variable que se introduce a realizar la instancia
    }
}

let cuenta1 = new CuentaBancaria("Juan Pérez", "12345678A", 1000); // declaramos una variable donde se pondra los valores especificos
cuenta1.mostrarDatos(); // nos mostrara la informacion de la instancia
cuenta1.realizaringreso(200);// nos mostrara la informacion de la instancia
cuenta1.realizarretiro(50);// nos mostrara la informacion de la instancia
let cuenta2 = new CuentaBancaria("Ana Goméz", "87654321B", 500);// declaramos una variable donde se pondra los valores especificos
cuenta2.mostrarDatos();// nos mostrara la informacion de la instancia
/* cuenta2.realizaringreso(100);// nos mostrara la informacion de la instancia
cuenta2.realizaringreso(300);// nos mostrara la informacion de la instancia */
cuenta1.realizartransferencia(cuenta2, 250);// pondremos valores especificos a la instancia y luego nos mostrara una informacion