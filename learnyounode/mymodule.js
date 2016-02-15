/**
 * Created by steffen on 10-02-2016.
 */
var fs = require('fs');
var path = require('path');

module.exports = (function(dir,ext,callback){

    fs.readdir(dir, function(err,list){

        if(err){
            return callback(err);
        }else {
            list = list.filter(function(file){
                return path.extname(file) === '.' + ext
            })
        }
    return callback (null,list);
    })

})