/**
 * Created by steffen on 09-02-2016.
 */

var stt = require('fs');
var content = stt.readFileSync(process.argv[2]);
var lines = content.toString().split('\n').length - 1
console.log(lines);




