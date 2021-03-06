####Command Line:
`touch app.js` (generally what people name express files)

`npm init -y` (made a json)(-y = yes to everything)

`npm install -S express`

`node app.js`

####Notes

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

####What is Express?

A minimalist server written in Javascript

#### How do you handle a request?

Look at user's request, the location they are trying to get to.

response methods: end, send JSON, redirect, render a view template, send a response of various types, send a file as an octet stream..

#### How to include Express?

install it, then require it

`var Express = require('express');`

`var app = Express();`

#### How to listen to port?

call app.listen, declare a port, write the handler function.

####What is routing?

Moving data packets from source to destination. Data=client's request + server's response.
"When a request comes in, how do I handle it?"

Routing refers to the definition of application end points and how they respond to client requests.

####What is a route method?

get, post, put, patch, delete, etc.
These methods allow Express to respond to specific request types in specific ways.

####What is a route path?

First argument in route definition
String containing the url endpoint

####What is a route handler?

The function part. Decides what to do with request and response.

Takes request(req) and response(res) and next as arguments
Client and server talk to each other via request and response
next() is used in middleware to continue to next route


####What is middleware?

Any function that takes a request and a response.

Functions that have access to the request and response objects and the next middleware function in the application’s request-response cycle
Next middleware function is denoted by a variable named next
Middleware functions can:
Execute any code
Make changes to the request and the response objects
End the request-response cycle
Call the next middleware function in the stack



## Node Module Research

#### What is the problem that the node.js Module system solves?

* Organizes pieces of code into files.

* Allows you to reuse code.

* Avoids large files.

* Easily share common functionality.

* Easily share and use libraries.

#### What types of values can a module export?

Objects and pretty much whatever you need within your own files.

#### 3 syntactical ways to export and object

* `module.exports = {
    add: function(a,b){
    return a + b;
    }
})`

this way will be seen more frequentlyl because you can keep adding.

* `module.exports.add = function(a,b){
    returna + b;
}`

* `exports.add = function(a,b){
    return a + b;
    }`

#### What are 3 kinds of modules?

* Core Modules(e.g. http. these are built into node)

* File Modules (things that you build. ex: '/', './', '../')

* node_modules (directory of modules created when you run npm install. Things you pull in when you're setting up your program)


#### Name and describe any 3 core modules

* http (will help you make requests)

* fs (file system gives you access to files)

* url (includes methods for url resolution and parsing)

* querystring (includes methods for dealing with query strings)

* path

* util


#### How do you require npm and core modules?

* `require('package-name')`

#### How does 'require' determine which modules to load?

* It first tries to find a core module (with that name), then it tries to look for a local file module with that name, then tries to find an installed module, else it throws an error.



## NPM

#### It does not mean node package manager!

* npm is a way to reuse, share and update code.

* "npm" is named after its command-line utility, which was organically selected to be easily typed by a right-handed programmer using a US QWERTY keyboard layout, ending with the right pinky finger in a position to type the - key for flags and other command-line arguments.

* npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you're sharing.

#### What command do you use to initialize npm in a project directory?

`npm init`

#### What file does that command create?

package.json

#### Why is a package.json helpful?

* It serves as documentation for what packages your project depends on.

* It allows you to specify the versions of a package that your project can use using semantic versioning rules.

* Makes your build reproduceable which means that its way easier to share with other developers.
The node_modules directory is huge!

* Puts all of relevant info about project in one place. Easy to see what packages you are using. It's like a roadmap.

#### What is a dependency?

* It's another file you depend on. Sometimes you'll have nested dependencies. npm install will show you the tree of dependencies

#### How do you save a dependency to a project's package.json?

* `npm install --save [module_name]`

#### How do you save module dependencies to the package.json file that are specifically for development? Why would you do this?

* `npm install --save-dev [module_name]`

*  These dependencies are needed for development not for the application to run.

#### What command do you use to install dependencies from an already existing package.json?

* `npm install`

#### What directory is created when you run npm install?

* node_modules

##### Pro tip: Add node_modules/ to .gitignore immediately after npm install

## Links:

slides by
[Danny Fritz](https://docs.google.com/presentation/d/1BiGB2VTtDIsdRc7IHtEk0u8Ach1gyzT3T6Wqr2SARQY/edit#slide=id.g144367c9c8_0_82)

[Node Documentation](https://nodejs.org/api/modules.html)

[Eloquent JavaScript](http://eloquentjavascript.net/20_node.html#h_BOlGLA/wK7)

[Art of Node](https://github.com/maxogden/art-of-node#modular-development-workflow)

[Learning Node](https://www.safaribooksonline.com/library/view/learning-node/9781449326128/ch04.html)

[Node on GitHub](https://github.com/nodejs/node/tree/master/lib)

[Interface Design Blog](http://bites.goodeggs.com/posts/export-this/)


