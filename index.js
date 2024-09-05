const express = require("express");
const app = express();
const port = 8080;
const path=require("path");
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));




app.get("/posts",(req,res)=>{
    res.render("index.ejs");
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})
app.get("/posts/das",(req,res)=>{
    res.render("dashboard.ejs");

})


app.get("/posts/live",(req,res)=>{
    res.render("livelocation.ejs");
})

app.get("/posts/otp",(req,res)=>{
    res.render("otp.ejs");
})

app.get("/posts/sos",(req,res)=>{
    res.render("sos.ejs");
})

app.get("/posts/frequency",(req,res)=>{
    res.render("frequency.ejs");
})






app.post("/posts",(req,res)=>{
    //console.log(req.body);
   
    res.redirect("/posts/das");
})
app.post("/posts/das",(req,res)=>{
    //console.log(req.body);
   
    res.redirect("/posts/live");
    res.redirect("/posts/otp");
    res.redirect("/posts/sos")
    res.redirect("/posts/frequency");
})




app.listen(port,()=>{
    console.log("listening to port : 8080");
});

