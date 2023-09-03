const express = require("express");
const connectToMongo = require('./db.js');
const cors = require('cors')
require('dotenv').config({path:'.env'});
const session = require('express-session')


const app = express();
app.use(express.json());
app.set('view engine','ejs');
app.use(express.static("public"));


app.use(cors());


app.use(function (req, res, next) {
  req.header("Access-Control-Allow-Origin", "*");
  req.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// session 
const oneDay = 1000 * 60 * 60 * 24;

app.use(
  session({
    secret: "afdhsfhsdk",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

app.get('/admin/login',(req,res)=>{   
    if(!req.session.login)
    res.render("admin/adminLogin");
    else
    res.redirect('/admin/home');
})

app.get('/admin/home',(req,res)=>{
    if(req.session.login)
    res.render("admin/adminPortal");
    else
    res.redirect('/admin/login')
})

app.use('/api/admin_auth',require('./routes/adminAuth'));


const PORT = 3000;

app.listen(PORT,()=>{
    console.log("server live..");
    connectToMongo();
});