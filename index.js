//Import Express library
const express = require('express');

//Creating instance of express
const app = express();

//Initializing port
const port = 8000;


//Use Express router//Middleware
app.use('/',require('./routes'));

//Setup Assets
app.use(express.static('assets'));




//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

//Running the Server
app.listen(port,function(err){

    //If Error occures
    if(err){
        console.log(`Error in running the Server :${err} `);
        return ;
    }


    //If Server executes Successfully then print the following
    console.log(`Server is running on port: ${port}`);
});
