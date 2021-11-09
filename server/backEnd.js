const express = require('express');
const cors= require('cors');

var bodyParser = require('body-parser');

const PORT=3000;
// to run server --  node backEnd

const app=express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());

app.get('/', function(req,res){
 res.send("hello server is running");
})
app.post('/post',function(req,res){
    console.log(req.body);
    res.status(200).send({"message is saved":"at port "})
})
app.listen(PORT, function(){
    console.log("server is running at :" + PORT);
})