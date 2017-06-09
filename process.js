"use strict";

// info de proceso

var info = {
    pid: process.pid,
    version: process.version,
    platform: process.platform,
    title: process.title,
    argumentos: process.argv,
    execPath: process.execPath,
    carpeta: process.cwd()
};

console.log('Entro en '+ info.carpeta);

process.on('exit', function(){
    console.log('Adeu, antes de terminar');
});

console.log('fin del proceso');

process.exit(0); // termina la ejecucion

console.log('el proceso está terminado, no se ejecuta esta parte')