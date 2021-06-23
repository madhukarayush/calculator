const express=require("express");
const path=require("path");
const app=express();
const port=process.env.PORT || 5002;

const static_path=path.join(__dirname, "../public");
app.use(express.static(static_path));
app.get("", (req,res) =>{
    res.send("Welcome");
})
app.get( "*", (req,res) =>{
    res.send("404 Pge Not Found");
})
app.listen(port,()=>{
    console.log( "server");
})
