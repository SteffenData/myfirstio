/**
 * Created by steffen on 15-02-2016.
 */

var filternames = []
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]

var myArray = [];
Array.prototype.myfilter = (function(callback){

    this.forEach(function(element){
        if(callback(element)){
            filternames.push(element)
        }
    })
    return filternames
})

var filterednames = names.myfilter(function(value){
    return value.length <= 3
})

console.log(filterednames)







