"use strict";

function createClosure(val) {

    return function(){
        return val;
    };
}

function createAdder(val) {
    return function (val2){
        return val + val2;
    }
}

var cl1 = createClosure(2);
console.log(cl1());


var plus5 = createAdder(5);

console.log(plus5(10));

console.log(plus5(20));
