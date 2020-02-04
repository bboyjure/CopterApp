var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    PORT = 3000 || process.env.PORT

mongoose.connect("mongodb://localhost:27017/coptercon", {useNewUrlParser: true, useUnifiedTopology: true});
app.set("view engine", "ejs");
app.use('/img', express.static(__dirname + '/img'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/css'));
app.use('/scripts', express.static(__dirname + '/scripts/'));



//SCHEMA SETUP
var copterconSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});
var Copters = mongoose.model("Copter", copterconSchema);




///////////////



app.get("/", (req,res) => {
    res.render("landing");
});

app.get("/helicopters", (req,res) =>{
    // Get all copters from DB
    Copters.find({}, (err, allCopters) =>{
        if(err){
            console.log(err)
        }
        else{
            res.render("helicopters",{copters:allCopters} )
        }
    })
    //
})

app.post("/helicopters", (req,res) =>{
    var name = req.body.name
    var image = req.body.image
    var newCopter = {name:name, image:image}

    Copters.create(newCopter, (err, newCreated)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/helicopters")   
        }
    })

})
app.get("/helicopters/new", (req,res) =>{
    res.render("new")
})


app.listen(PORT, ()=> console.log("Server has started on port " + PORT))