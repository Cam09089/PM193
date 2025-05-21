//EJERCICIO A
const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        cuidad: "Qro",
        pais: "Mexico"
    },
};

//aplica destructuracion aqui

const { nombre, edad, direccion: { cuidad, pais } } = persona;

//imprime el mensaje
console.log("Hola, me llamo " + nombre + ", y tengo " + edad + " años. Vivo en " + cuidad + ", " + pais + ".");