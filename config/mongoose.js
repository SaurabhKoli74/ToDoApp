//require the library
const mongoose = require('mongoose');


//connect to the database
mongoose.connect('mongodb://localhost/todolist_db',{
    useNewUrlParser:true, //optional
    useUnifiedTopology:true,//optional
    family:4
});

const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to the Databse '));

db.once('open',function(){
    console.log(`Successfully connected to the database`);
});