"use strict";

console.log('Empiezo');

function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000);
}

// bucle asÃ­ncrono en serie

// llamar a una funciÃ³n con un array en serie,
// al finalizar llamar al callback de finalizaciÃ³n
function serie(lista, func, callbackFin) {
    if (lista.length == 0) {
        callbackFin();
        return;
    }
    func(lista.shift(), function(){
        serie(lista, func, callbackFin);
    })
}

var lista = [1, 2, 'tres', 4, 5];

serie(lista, escribeTras2Segundos, function(){
    console.log('he terminado');
});