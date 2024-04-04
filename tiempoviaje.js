function calcularTiempoDeViaje(distancia, velocidadPromedio, transporte) {

    return distancia / velocidadPromedio;
}

function calcularTiempoDeViajeTransporte(distancia, transporte) {
    var velocidadPromedio;
    if(transporte == 'auto'){
        velocidadPromedio =100;
        return distancia / velocidadPromedio;
    }
    else if(transporte == 'bicicleta') {
        velocidadPromedio =15;
        return distancia / velocidadPromedio;
    } else if(transporte =='avion'){
        velocidadPromedio =250;
        return distancia / velocidadPromedio;
    }
    
    else
      velocidadPromedio =2;
      return distancia / velocidadPromedio;
}



const distancia =600; 
const transporte = 'avion';
const TiempoDeViaje = calcularTiempoDeViajeTransporte(distancia, transporte);
console.log("El tiempo de viaje es " + TiempoDeViaje + " horas");
