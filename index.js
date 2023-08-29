const express = require("express");
const connectToMongo = require('./db.js');


const app = express();
app.use(express.json());
app.set('view engine','ejs');
app.use(express.static("public"));

app.get('/',(req,res)=>{
   res.render('adminPortal');
});

app.listen(3000,()=>{
    console.log("server live..");
    connectToMongo();
});