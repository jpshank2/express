var express = require("express");
var app = express();

app.use("/public", express.static("public"))


app.use("/", function(req, res, next) {
    console.log(req.url);
    next();
})

app.get("/", function(req, res){
    console.log("Hello from the web server side...")
    res.sendFile(__dirname+ "/index.html");
});


app.listen(3000);