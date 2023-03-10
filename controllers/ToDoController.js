
// //Importing collection which has defined schema
// const Todo = require('./models/Todo');
const Todo = require("../models/Todo");



module.exports.createToDo = function(req,res){

    // console.log("inside CreateToDo");
    Todo.create({
        desc:req.body.desc,
        category:req.body.category,
        duedate:req.body.duedate
    },function(err,newtodo){
        if(err){
            console.log('error in creating a Todo!!')
            return;
        }

        // console.log(newtodo);
         
      
        return res.redirect('back');
    });



}



//Export 
module.exports.ToDolist = function(req,res){

    Todo.find({},function(err,todos){
        if(err){
            console.log('Error in fetching Todos!!!');
            return;
        }

        return res.render('home',{
            title:"ToDoApp",
            todolist:todos
        });
    });


   
};


module.exports.deleteTodo = function(req,res){
    let uid = req.query.id;
    uid = uid.split(',');
    for(let i = 0;i<uid.length;i++){
        Todo.findByIdAndDelete(uid[i],function(err){
            if(err){
                console.log(err);
                return;
            }
        });

    }
    return res.redirect('/');
}