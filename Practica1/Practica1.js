
//ejercicio a
var nombre = "Armando";
const edad = 25;

nombre = "Ana Maria";

const saludo = 'Hola, ${nombre}. Tienes ${edad} años.';
console.log(saludo);

//ejercicio b
const cuadrado = (num) => {
    return num * num;
}   
console.log(cuadrado(10));

//ejercicio c
const saludoPersonalizado = (nombre, edad) => {
    return `Hola, me llamo ${nombre} y tengo ${edad} años.`;
}
console.log(saludoPersonalizado("Camila", 21));