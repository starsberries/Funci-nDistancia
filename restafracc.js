function restafracciones(num1, den1, num2, den2) {
    const restaNum = (num1 * den2) - (num2 * den1);
    const restaDen = den1 * den2;
    return `${restaNum}/${restaDen}`;
}

const num1 = 1;
const den1 = 3;
const num2 = 1;
const den2 = 3;
var resultado = restafracciones(num1, den1, num2, den2)
console.log("La resta de " + num1 +"/"+ den1 +" - "+ num2 +"/"+ den2 +":");
console.log("La resta de las fracciones es: " + resultado);
