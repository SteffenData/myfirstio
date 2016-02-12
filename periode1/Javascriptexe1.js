//namesort = names.filter(isafilter);
//console.log(namesort);
//
//namesort = names.map(function(value){
//
//    return value.toUpperCase()
//
//})
//
//console.log(namesort)


var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]




function isafilter(value) {

    if (value.length <= 3) {
        return value;
    }
}
/*function myFilter(array, data)
{
    var hej = [];
    for (var i= 0, max = array.length; i < max; i++){

       if(myFilter(data[i])){
           hej.push(array[i]);
       }
    }
        return hej;

}*/


function usingFilterMethod(array, filterMethodCallback) {
    var hej = [];
    for (var i = 0, max = array.length; i < max; i++) {
        if (filterMethodCallback(array[i])) {
            hej.push(array[i]);
        }
    }
    return hej;
};



console.log(names.length);
console.log(usingFilterMethod(names,isafilter));














