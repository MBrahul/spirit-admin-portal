const express = require("express");
const connectToMongo = require('./db.js');
require('dotenv').config({path:'.env'});
const app = express();
app.use(express.json());
app.set('view engine','ejs');
app.use(express.static("public"));

app.get('/',(req,res)=>{
   res.render('adminPortal');
});

const PORT = process.env.PORT || 6010;

app.listen(PORT,()=>{
    console.log("server live..");
    connectToMongo();
});