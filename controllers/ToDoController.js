//Export 
module.exports.ToDo = function(req,res){
    res.render('index.ejs',{
        title:"ToDoApp"
    });
}