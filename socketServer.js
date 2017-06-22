

var socketServer = require('socket.io').listen(8082);


socketServer.on('connect', function(socketClient) {
  socketClient.join("cuarto1");
  socketServer.to("cuarto1").emit("respServer","conectado al server");

  socketClient.on('mensaje',function(data){
      console.log(data);
      socketServer.to(data.cuarto).emit("chat",data);
  });


});
