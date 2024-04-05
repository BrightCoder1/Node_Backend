const mongoose = require('mongoose');
require("dotenv").config();
const URL = process.env.URL || 3000;

const connectDB =async()=> {
    try {
        await mongoose.connect(URL);
        console.log("Connection Successfull");
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB;