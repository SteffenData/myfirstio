/**
 * Created by steffen on 16-02-2016.
 */
function myModule() {
    var name = "tim", age = 28;
    return function greet() {
        return "Hello " + name + ".  Wow, you are " + age + " years old.";
    }
}
// call `myModule` to get a closure out of it.
var greeter = myModule();
// Call the closure
greeter();
console.log(greeter())