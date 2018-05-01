var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();
app.set('port', (process.env.PORT || 3000), function(){
   var host = server.address().address;
   var port = server.address().port;
   console.log('Listening on http://%s:%s', host, port);
});

//Static files
app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection', function(socket){
    console.log('a new user connected', socket.id);
    
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });
    
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});
