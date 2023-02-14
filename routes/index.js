const express=require('express');
const mongoose=require('mongoose');

//Requiring the todo Schema 
const todoArray=require('../models/todo');

const Todofullist={};


const router=express.Router();

// Request Handling rendering the page on opening
router.get('/',function(req,res){

todoArray.find({},function(err,list){
    if(err){
        console.log("No Data to Fetch");
        return;}
    console.log("This is the area to look out for",list);   
    let date=new Date();
    let day=date.getDay();
    res.render('home',{
        List:list,
        day:date
    });

    });



});


// Adding task
router.post('/submit',function(req,res){
console.log(req.body.date);
let isDeadlinepresent;
if(!req.body.date){
    isDeadlinepresent="No Deadline";
}
else{
    isDeadlinepresent=req.body.date;
}

todoArray.create({
    description: req.body.description,
    date: isDeadlinepresent,
    category: req.body.category,
},function(err,newList){
    if(err){ console.log('Error in creating List');return;}
    // console.log("******","newTaskAdded");



});

return res.redirect('/');
});



// Deleting task
router.get('/delete-task/:id',function(req,res){
console.log(req.params);
todoArray.findByIdAndDelete(req.params.id,function(err){

console.log("Can't delete Data, Error");

});



res.redirect('/');



});








module.exports=router;