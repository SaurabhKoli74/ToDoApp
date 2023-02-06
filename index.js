//Import Express library
const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');


//Creating instance of express
const app = express();

//Initializing port
const port = 8000;

//require mongoose
const db = require('./config/mongoose');

//Importing collection which has defined schema
const Todo = require('./models/Todo');


app.use(express.urlencoded()); //Middleware acts as a parser

//Setup Assets
app.use(express.static('assets'));

//Setup express-ejs-layouts
app.use(expressEjsLayouts);

//extract styles and scripts from sub pages into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//Use Express router//Middleware
app.use('/',require('./routes'));





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
