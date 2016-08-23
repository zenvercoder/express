###Command Line:
`touch app.js` (generally what people name express files)

`npm init -y` (made a json)(-y = yes to everything)

`npm install -S express`

`node app.js`

###Notes

https://expressjs.com/

default port for http = 80

https = 443

for google.com, we leave the port off b/c it defaults to port 80

throw er; // Unhandled 'error' event

Error: listen EADDRINUSE :::5000 someone is already using it

route: function(request, response){
response.send("OK");
});

handler function: app.get("/", function(request, response){

run app with "node app.js" in command line
go to browser, type in localhost:5000

terminal: `node app.js`

why use express:
fast
great for doing an API server
always put node_modules in gitignore

###What is Express?

A minimalist server written in Javascript

### How do you handle a request?

Look at user's request, the location they are trying to get to.

response methods: end, send JSON, redirect, render a view template, send a response of various types, send a file as an octet stream..

### How to include Express?

install it, then require it

`var Express = require('express');`

`var app = Express();`

### How to listen to port?

call app.listen, declare a port, write the handler function.

###What is routing?

Moving data packets from source to destination. Data=client's request + server's response.
"When a request comes in, how do I handle it?"

Routing refers to the definition of application end points and how they respond to client requests.

###What is a route method?

get, post, put, patch, delete, etc.
These methods allow Express to respond to specific request types in specific ways.

###What is a route path?

First argument in route definition
String containing the url endpoint

###What is a route handler?

The function part. Decides what to do with request and response.

Takes request(req) and response(res) and next as arguments
Client and server talk to each other via request and response
next() is used in middleware to continue to next route


###What is middleware?

Any function that takes a request and a response.

Functions that have access to the request and response objects and the next middleware function in the application’s request-response cycle
Next middleware function is denoted by a variable named next
Middleware functions can:
Execute any code
Make changes to the request and the response objects
End the request-response cycle
Call the next middleware function in the stack






slides by 
[Danny Fritz](https://docs.google.com/presentation/d/1BiGB2VTtDIsdRc7IHtEk0u8Ach1gyzT3T6Wqr2SARQY/edit#slide=id.g144367c9c8_0_82)

