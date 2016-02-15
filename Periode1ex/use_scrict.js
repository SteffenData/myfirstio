/**
 * Created by steffen on 15-02-2016.
 */

//when we use "use strict" we tell the system it has to do what we exspect it to do, in this case i have not declared my variable, as var x
//but the problem is that the compiler can handle this problem, and will translate x to be hello, when we use "use scrict" it will tell us, that there are an error
// so "use scrict" let the program to run like the developer want it to. it prevent us to use specefik keywords, define a property more that ones ect.

"use strict"
x = "hello"
console.log(x)


"use strict"
var x = "hello"
console.log(x)



