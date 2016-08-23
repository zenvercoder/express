var Express = require('express');
var app = Express();
var port = 5000;

app.get("/", function(request, response){
    response.send("OK");
});

//route: function(request, response){
//response.send("OK");
//});

//handler function: app.get("/", function(request, response){

app.listen(port);

//run app with "node app.js" in command line
// go to browser, type in localhost:5000

