//server instantiate
const express=require('express');
const app= express();

//use to parse req.body in express -->used for post and put

const bodyParser=require('body-parser');

//specifically parse json data & add it to the request's body object

app.use(bodyParser.json());

//activate server on port 3000
app.listen(3000,()=>{
    console.log("server started on port 3000")
});

//routes
app.get('/',(request,response)=>{
    response.send("hey everyone");
})

app.post('/api/cars',(request,response)=>{
    const{name,brand}=request.body;
    console.log(name);
    console.log(brand);
    response.send("car submitted successfully");
})

const mongoose= require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("connection successful")})
.catch((error)=>{ console.log("received an error")})