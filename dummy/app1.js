/**
 * Created by steffen on 17-02-2016.
 */
var http = require('http')

http.createServer(function(reg,res){
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end('Hello World\n')
}).listen(1234, '127.0.0.1')
console.log('Server is running at http://127.0.0.1:1234/')