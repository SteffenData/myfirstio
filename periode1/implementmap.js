/**
 * Created by steffen on 15-02-2016.
 */
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]

function namestouppercase(value){

    return value.toUpperCase()

}

function insertuppercaseinarray(array,callback){

    var uppercasearray = []
    for(var i = 0, max = array.length; i < max; i++){

        if(callback(array[i])){
            uppercasearray.push(array[i])
        }
    }
    return uppercasearray
}

console.log(insertuppercaseinarray(names,namestouppercase))


