


var Express = require('express');
var app = Express();
var port = 5000;

// "/" it's a filter to where the request goes. It's the path of where we are directing the request to
// .get = the method (or verb. can also be POST, PUT, DELETE)
// if someone does a get request for /, it will go into this handler. if someone does a post, it will not go into this handler
app.get("/", function(request, response){
    response.send("OK");
});

app.get("/:dogs/:name", function(request, response){
    response.send("Name: " + request.params.name);
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});



app.listen(port);


