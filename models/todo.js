const mongoose=require('mongoose');

//Schema for Todo List 
const todoSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true,
        unique:true,
    },
    date:{
        type:String,
    },
    category:{
        type:String,
        required:true,}
},
{
    timestamps:true
}

);


const TodoDb=mongoose.model('Todo',todoSchema);

module.exports=TodoDb;