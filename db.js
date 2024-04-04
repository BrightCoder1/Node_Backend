const mongoose = require("mongoose");
require("dotenv").config();
const URL_ENV= process.env.URL;
const ConectDB = async ()=>{
    try {
        await mongoose.connect(URL_ENV);
        console.log("Connect Data Base");
    } catch (error) {
     console.log(error);   
    }
}

module.exports =ConectDB;