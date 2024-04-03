const mongoose =require("mongoose");
const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});

const MenuItem = new mongoose.model("menu",menuItemSchema);

module.exports = MenuItem;