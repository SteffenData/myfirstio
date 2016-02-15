/**
 * Created by steffen on 15-02-2016.
 */
var a = [1,2,3];
var b = [1,2,3];


function handleNumArrays(na1,na2,callback) {
    var returnArray = [];
    for (var i = 0; i < na1.length; i++){
        returnArray.push(na1[i] + na2[i]);
    }
    callback(returnArray);
}


function commaNumber(array){
    console.log(array.join(","));
}

function calculates(array){
    var calArray= 0
    for (var i in array){
        calArray += array[i]
        i++
    }
    console.log(calArray)
}

function multiplies (array){
    var multipliedresult = 0
    multipliedresult = array.map(function(numbers){
        return numbers * 10
    })
    console.log(multipliedresult.join(","))

}

handleNumArrays(a,b,commaNumber);
handleNumArrays(a,b,calculates)
handleNumArrays(a,b,multiplies)

