

var express=require('express');
var app=express();

app.get("/",(req,res)=>{

    res.send(
        "<h1>Vijay sales <h1>"
        +"<hr/>"
        +"<h3>Smart Devices for sale</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptops</li>"
        +"<li>Mobile Phones</li>"
        +"<li>Holographic Devices</li>"
        +"<li>smart watches</li>"
        +"<li>gaming consoles</li>"
        +"</ol>"
    );
});

app.get("/aboutus",(req,res)=>{

    res.send(
        "<h1>Vijay sales <h1>"
        +"<hr/>"
        +"<h3>Doing ordinary things extraordinally</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Chief mentor: Ravi Tambde</li>"
        +"<li>Director: Shubhangi Tambde</li>"
        +"<li>Subject matter expert: Rohit Gore</li>"
        +"</ol>"
    );
});



var server=app.listen(9000);
console.log("Vijay Sales online shopping runnibg on port 9000")