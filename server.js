var express = require('express')
var app = express()

var http = require('http')
var server = http.Server(app);

const socketIO = require('socket.io');
var io = socketIO(server);

var path = require('path')
var port = 4000

//Express Middleware
app.use(express.json()); //A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).
app.use(express.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, 'public'))); // To serve static files
//ByDefault serve /public/index.html 


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    socket.broadcast.emit('chat message', msg);
  });
  socket.join()
  console.log("Connection Established")
});
  
server.listen(port , ()=>{console.log(`Listening on Port ${port}`)})


// socket.on('socket name',function(msg){---}) is used to listen for the event

// socket.on('disconnect',function(){----})

// socket.emit('name',message) it emits to the same socket through which client is connected to server

// socket.broadcast.emit('name',message);

// io.emit('name',msg) it emits to every one connected to server


/** room related functions */
// io.to(room name).emit("name",message)

// socket.broadcast.to(room name).emit('name',message);

//socket.join(room name);  to join a given room
