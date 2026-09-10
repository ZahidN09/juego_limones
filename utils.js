function generarAleatorio(min,max){
    let random = Math.random();
    let numero = Math.ceil(random*(max-min)) + min;
    return numero;
}