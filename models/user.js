const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('USER',userSchema);