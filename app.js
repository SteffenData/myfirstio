/**
 * Created by steffen on 17-02-2016.
 */
var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')


// configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// add midleware

app.use(bodyParser())

app.use(express.static(path.join(__dirname, 'bower_components')))

// define route

app.use(require('./todos'))

app.get('/', function(req,res){
    res.render('index')
})

app.listen(1234,function(){

    console.log('ready on port 1234')
})

