//namesort = names.filter(isafilter);



var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]

function isafilter(value) {

    if (value.length <= 3) {
        return value;
    }
}



function usingFilterMethod(array, filterMethodCallback) {
    var hej = [];
    for (var i = 0, max = array.length; i < max; i++) {
        if (filterMethodCallback(array[i])) {
            hej.push(array[i]);
        }
    }
    return hej;
};

var net = usingFilterMethod(names,isafilter)

console.log(net);














