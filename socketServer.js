

var socketServer = require('socket.io').listen(8082);


socketServer.on('connect', function(socketClient) {

  socketClient.on('unirse',function(data){
    console.log(data);
    socketClient.join(data.cuarto);
    data.mensaje="conectado..."
    socketServer.to(data.cuarto).emit("unionExitosa",data);
  });

  socketClient.on('mensaje',function(data){
    console.log(data);
      socketServer.to(data.cuarto).emit("chat",data);
  });


});
