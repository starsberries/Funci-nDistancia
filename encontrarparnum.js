function encontrarNumeroPar(num){
    if(num % 2===0){
        return true;
        
    }
    else{
        return false;
    }

} 

var num = 4;
var resultado = encontrarNumeroPar(num);
console.log(resultado)