
/**
 * Created by steffen on 09-02-2016.
 */
var stt = require('fs');
stt.readFile(process.argv[2], function(err,data){
    if(err){
        console.log("fejl ha ha")
    }
    else {
      console.log(data.toString().split('\n').length -1)
    }
});


