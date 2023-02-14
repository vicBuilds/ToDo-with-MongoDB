const express=require('express');
// require the db
const db=require('./config/mongoose');
const app=express();
const port=8000;

// MiddleWare for encoding requests
app.use(express.urlencoded());
// MiddleWare for routing
app.use('/', require('./routes/index'));
// MiddleWare for accesing the static files
app.use(express.static('./static'));

// Setting the view engine to ejs and setting the views folder
app.set('view engine','ejs');
app.set('views','./views');



// Server starting on port 8000
app.listen(port,function(err){

if(err){
    console.log("Error on staring the Server");
    return;}

console.log("Server up and running at port:", port);    
});