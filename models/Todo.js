//require mongoose to create schema

const mongoose = require('mongoose');


//creating Schema
const toDoSchema = new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    duedate:{
        type:String,
        required:true
    }
});


//Creating Collection which contain the above Schema
const Todo = mongoose.model('Todo',toDoSchema);
//Created Collection called Todo using toDoSchema

module.exports = Todo; //exports to use it in index.js(Server)