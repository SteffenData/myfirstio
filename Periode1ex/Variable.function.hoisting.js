/**
 * Created by steffen on 15-02-2016.
 */

var f = function(){
    if (true) {var v1= 1;}
    if(true) {var v2 =2;}
    return v1+v2;
}

console.log(f());

// when we run our application, the runtime will at the top at the function, even if we use them, and declare them inside the funktion.
// write it like this

var f = function(){
    var v1, v2
    if (true){v1=1}
    if(true){v2=2}
    return v1+v2

}
console.log(f())