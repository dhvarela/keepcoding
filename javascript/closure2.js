"use strict";

function creaAgente(nombre){
    var edad = 0;
    return {
        ponNombre: function(nuevoNombre){
            nombre = nuevoNombre;
        },
        leeNombre: function (){
            return nombre;
        },
        ponEdad: function(nuevaEdad){
            edad = nuevaEdad;
        },
        leeEdad: function(){
            return edad;
        },
        escribe: function(){
            console.log('Soy ' + nombre + ' y tengo ' + edad + ' años');
        }
    }
}

var smith = creaAgente('Smith');
smith.ponEdad(30);

var jones = creaAgente('Jones');
jones.ponEdad(34);

console.log(smith.leeNombre() + ' ' + smith.leeEdad());
console.log(jones.leeNombre() + ' ' + jones.leeEdad());

setTimeout(smith.escribe, 1000);