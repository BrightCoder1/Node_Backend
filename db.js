const mongoose = require("mongoose");

const URL = "mongodb://127.0.0.1:27017/FullData";

const ConectDB = async ()=>{
    try {
        await mongoose.connect(URL);
        console.log("Connect Data Base");
    } catch (error) {
     console.log(error);   
    }
}

module.exports =ConectDB;