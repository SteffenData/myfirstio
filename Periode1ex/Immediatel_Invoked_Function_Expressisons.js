/**
 * Created by steffen on 17-02-2016.
 */
// iife


// this is a function statement
function notiifeever(name){
    console.log("hello" + name)
}

// this is a function expressing
var notiife = function(name){
    console.log("hello" + name)
}


// this is an iife look at the () at the end of the function, it invoke itself, the other functions have to be invoked manuelt.
// this run after its created
var iife = function(name){
    return "hello" +" "+ name
}("Lars")

console.log(iife)