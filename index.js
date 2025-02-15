require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const serviceRoutes=require("./routes/services");
const userModel=require("./models/user");


app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));


app.get("/cpucare",(req,res)=>{
    res.render("home.ejs");
});
app.get("/about",(req,res)=>{
    res.render("About.ejs");
});
app.get("/privacy-policy",(req,res)=>{
    res.render("pp.ejs");
});
app.get("/message",(req,res)=>{
    res.render("message.ejs");
});
app.post("/customer",async(req,res)=>{
    let{username,message,Phone,email}=req.body;
    console.log(username,message,Phone,email);
    const u1=new userModel({
        username,email,Phone,message
    });
   await u1.save();
   res.redirect("/message");
})

app.use("/services",serviceRoutes);
async function main() {
    try {
        await mongoose.connect(process.env.URL);
        console.log('successfully connected to database');
    } catch (err) {
        console.log(err);
    }
}
main();
const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log('server start');
})