function generarAleatorio(min,max){
    let random = Math.random();
    let numero = Math.ceil(random*(max-min)) + min;
    return numero;
}

function mostarEnSpan(idSpan,valor){
    let cmt = document.getElementById(idSpan);
    cmt.textContent = valor;
}