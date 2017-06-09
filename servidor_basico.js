var http = require('http');

var server = http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h2>Wake up, Neo ... </h2>');
});

// arrancar servidor

server.listen(1337,'127.0.0.1');

var plataforma = process.platform;

console.log('Servidor arrancado en un ' + plataforma + ' con la url 127.0.0.1:1337');