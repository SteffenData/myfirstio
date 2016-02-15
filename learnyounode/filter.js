/**
 * Created by steffen on 09-02-2016.
 */
var fs = require('fs');
var file = process.argv[2];
var path = require('path');

fs.readdir(file, function(err,list){
    if(err){
        console.log("fejl ha ha" + list)
    }
    else {
        list.forEach(function(filename){
          var entry = filename

            if(path.extname(entry) === "." + process.argv[3]){
              console.log(entry);


            }

        }
        )

    }
});