var express        = require('express');
var app            = express();
var http           = require("http").Server(app);
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

app.use(bodyParser.json()); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
http.listen('3000');
app.get('/',function(req,res){
    res.send('hello world');
});
var Barang = mongoose.model('barang', {
                namabarang : {type : String},
                stok : {type:String},
                status : {type : String, default: ''}
            });
app.get("/getdatabarang",function(req,res){
    Barang.find().exec().then(function(docs){
        res.json(docs);
    })
})