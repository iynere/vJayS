module.exports = function(io) {
    io.on('connection', function(controllerSocket) {
      controllerSocket.on('clearButtonClicked', data => {
        controllerSocket.broadcast.emit('clearCanvas')
      })

      controllerSocket.on('ellipseButtonClicked', (commandType)=>{
        controllerSocket.broadcast.emit('drawEllipse')
        controllerSocket.broadcast.emit('allowInteraction', commandType)
      })

      controllerSocket.on('clickedColorEllipse', (commandType)=>{
        controllerSocket.broadcast.emit('drawColorEllipse')
        controllerSocket.broadcast.emit('allowInteraction', commandType)
      })

      controllerSocket.on('clickedWhiteEllipse', (commandType)=> {
        controllerSocket.broadcast.emit('drawWhiteEllipse')
        controllerSocket.broadcast.emit('allowInteraction', commandType)
      })

      controllerSocket.on('clickedEmoticons', (commandType)=> {
        controllerSocket.broadcast.emit('drawEmoticons')
        controllerSocket.broadcast.emit('allowInteraction', commandType)
      })

      controllerSocket.on('sendCommand', (commandType)=> {
        controllerSocket.broadcast.emit('allowInteraction', commandType)
      })


    });
};
