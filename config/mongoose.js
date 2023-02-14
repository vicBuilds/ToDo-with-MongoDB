// Setting up the config for connecting to Database MongoDB

const mongoose=require('mongoose');
require('dotenv').config();

console.log(process.env.GET_URL);

// mongoose.connect('`${process.env.GET_URL}`');

mongoose.connect(process.env.GET_URL);

const db=mongoose.connection;

// Check if the connection is alright 
db.once('open', function(){
    console.log("Your Db is up and wroking");
});