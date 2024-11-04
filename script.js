
class Persona {
    id = 0;
    nombre = "";
    apellido = 0;
    edad = 0;
    constructor(id, nombre, apellido, edad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    toString() {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}`;
    }

    toJSON() {
        return {
            id: this.id,
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad
        };  
    }
}

class Empleado extends Persona {
    sueldo = 0.0;
    ventas = 0.0;
    constructor(id, nombre, apellido, edad, sueldo, ventas) {
        super(id, nombre, apellido, edad);

        this.sueldo = sueldo;
        this.ventas = ventas;
    }

    toString() {
        return super.toString() + `Sueldo: ${this.equipo}, Ventas: ${this.ventas}`;
    }

    toJSON() {
        return {
            ...super.toJSON(), 
            sueldo: this.sueldo,
            ventas: this.ventas
        };
}
}


class Cliente extends Persona {
    compras = 0.0;
    telefono = "";
    
    constructor(id, nombre, apellido, edad, compras, telefono) {
        super(id, nombre, apellido, edad);
        this.compras = compras;
        this.telefono = telefono;
    }

    toString() {
        return super.toString() + `, Compras: ${this.titulo}, Telefono: ${this.facultad}`;
    }

    toJSON() {
        return {
            ...super.toJSON(), 
            compras: this.compras,
            telefono: this.telefono
        };
    }
}

function mostrarSpinner() {
    document.getElementById('spinner').style.display = 'flex'; // Muestra el spinner

    // Simula una operación que toma tiempo
    setTimeout(function() {
        ocultarSpinner(); // Oculta el spinner después de 3 segundos
    }, 3000); // 3000 ms = 3 segundos
}

function ocultarSpinner() {
    document.getElementById('spinner').style.display = 'none'; // Oculta el spinner
}