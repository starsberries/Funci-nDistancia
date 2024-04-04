function sumafracciones(num1, den1, num2, den2) {
    const sumaNum = (num1 * den2) + (num2 * den1);
    const sumaDen = den1 * den2;
    return `${sumaNum}/${sumaDen}`;
}

function restafracciones(num5, den6, num7, den8) {
    const restaNum = (num5 * den6) - (num7 * den8);
    const restaDen = den6 * den8;
    return `${restaNum}/${restaDen}`;
}


const num1 = 1;
const den1 = 3;
const num2 = 1;
const den2 = 3;
var resultado = sumafracciones(num1, den1, num2, den2)
console.log("La suma de " + num1 +"/"+ den1 +" + "+ num2 +"/"+ den2 +":");
console.log("La suma de las fracciones es: " + resultado);


const num5 = 1;
const den6 = 3;
const num7 = 1;
const den8 = 3;
var resultado2 = restafracciones(num5, den6, num7, den8)
console.log("La resta de " + num5 +"/"+ den6 +" - "+ num7 +"/"+ den8 +":");
console.log("La resta de las fracciones es: " + resultado2); 