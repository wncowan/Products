//SETUP

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/dist/public'));

//MONGOOSE

mongoose.connect('mongodb://localhost/products');

var ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        minlength: 4
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
});

mongoose.model('Product', ProductSchema);
var Product = mongoose.model('Product');

//ROUTES

app.get('/api/products', function(req,res) {
    Product.find(function(err,products){
        if(err){
            res.json({message:"error",result:err});
        } else {
            res.json({message:"success",result:products});
        }
    });
});

app.post('/api/products', function(req,res){
    Product.create(req.body, function(err,product){
        if(err){
            res.json({message:"error", result:err});
        } else {
            res.json({message:"success",result:product});
        }
    });
});

app.get('/api/products/:id', function(req,res){
    Product.findById(req.params.id, function(err,product){
        if(err){
            res.json({message:"error", result:err});
        } else {
            res.json({message:"success",result:product});
        }
    });
});

app.put('/api/products/:id', function(req,res){
    console.log("req.body");
    console.log(req.body);
    Product.findByIdAndUpdate(req.params.id,req.body,function(err, product){
        if(err){
            res.json({message:"error", result: err});
        } else {
            res.json({message:"success", result: product})
        }
    });
});

app.delete('/api/products/:id/delete',function(req,res) {
    Product.findByIdAndRemove(req.params.id,function(err){
        if(err){
            res.json({message:"error"});
        } else {
            res.json({message:"success"})
        }
    });
});

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000,function(){
    console.log("Listening on Port 8000");
});