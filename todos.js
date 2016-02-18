/**
 * Created by steffen on 18-02-2016.
 */
var express = require('express')

var router = express.Router()

var todoitems = [
    {id: 1, desc: 'foo'},
    {id: 2, desc: 'bar'},
    {id: 3, desc: 'baz'} ]

router.get('/', function(reg,res){

    res.render('index',{
        title:'My app',
        items: todoitems
    })

})

router.post('/add', function(req,res){
    var newItem = req.body.newItem;
    todoitems.push({
        id:todoitems.length + 1,
        desc: newItem
    })
    res.redirect('/')
})



module.exports = router