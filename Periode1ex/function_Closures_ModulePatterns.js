/**
 * Created by steffen on 17-02-2016.
 */
// the idea with the modulePatterns is to create privatecy, js dont directily have that, but it is possible to create that
    // we can not asses people.sayname..... this is private, try it in the browser
// we can create a new object there use this function, but the result will be undifined
    // the information can be accesed from another function

var people = (function(){

    var name = 'Steffen'
    function sayname(){
        console.log(name)
    }

    return {sayname: sayname}

}())
// this will give an error
// people.sayname = "will"
//people.sayname()


// under construct
var peoplename = function(){
    var name = "steffen"
    saymyname = name
    console.log(name)

    return {saymyname: saymyname}
}

saymyname = "hej"
peoplename()
console.log(saymyname)




