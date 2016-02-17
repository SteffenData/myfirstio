/**
 * Created by steffen on 16-02-2016.
 */
var http = require('http')

var server = http.createServer(function(request,response){

    response.writeHead(200,{

        'Content-type' : 'text/plain'
    })

    response.end('hello world')
})

server.listen(8000)

console.log('listen on http port 8000')