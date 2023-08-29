const mongoose = require('mongoose');
require('dotenv').config({path:'.env'});
const D_PASSWORD = process.env.D_PASSWORD

const mongoURL =`mongodb+srv://rp8550495:vipZux-dogdo2-cyhxaz@cluster0.xk5bgmf.mongodb.net/?retryWrites=true&w=majority`;


const connectToMongo=()=>{
    mongoose.connect(mongoURL).then(()=>{
        console.log("connected to mongo atlas successfully");
    })
};

module.exports = connectToMongo;