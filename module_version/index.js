"use strict";

var fs = require('fs');
var path = require('path');

var moduleVersion = function(moduleName, callback){
    var file = path.join('./node_modules','chance','package.json');
    fs.readFile(file, function(err, data){
        if(err) {
            callback(err);
            return;
        }

        // if not error => convert content to object
        var packageJson =  {};
        try {
            var packageJson = JSON.parse(data);
        } catch(e){
            callback('parser error detected');

            return;
        }

        if(packageJson && !packageJson.version) {
            callback('No version tag found');
            return;
        }

        callback(null, packageJson.version);

    });
};


var module = 'chance';
moduleVersion(module, function(err, version){
    if (err) {
        console.log("An error ocurred",err);
        return;
    }
    console.log('The module version '+ module +' is: '+ version);
});