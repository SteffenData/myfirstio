/**
 * Created by steffen on 10-02-2016.
 */
var mymodule = require('./mymodule.js');
var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir,ext, function (err,list){

   if(err){
       console.log('again' + err)
   }else{
       list.forEach(function(file){
           console.log(file)
       })
   }



})
