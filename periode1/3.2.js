/**
 * Created by steffen on 15-02-2016.
 */


var filternames = []
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]

var myArray = [];
Array.prototype.filterToUppercase = (function(callback){

    this.forEach(function(element){
        if(callback(element)){
            filternames.push(element.toUpperCase())
        }
    })
    return filternames
})


var filterednames = names.filterToUppercase(function(value){
    return value
})

console.log(filterednames)