module.exports = function(io) {
    io.on('connection', function(controllerSocket) {
      controllerSocket.on('clearButtonClicked', data => {
        controllerSocket.broadcast.emit('clearCanvas')
      })

      controllerSocket.on('clickedColorEllipse', (commandType)=>{
        controllerSocket.broadcast.emit('drawColorEllipse')
        controllerSocket.broadcast.emit('allowInteraction', commandType)
      })

      controllerSocket.on('clickedWhiteEllipse', (commandType)=> {
        controllerSocket.broadcast.emit('drawWhiteEllipse')
        console.log("clicking")
        controllerSocket.broadcast.emit('TestingSocket')
        controllerSocket.broadcast.emit('allowInteraction', commandType)
      })

      controllerSocket.on('clickedEmoticons', (commandType)=> {
        controllerSocket.broadcast.emit('drawEmoticons')
        controllerSocket.broadcast.emit('allowInteraction', commandType)
      })

      controllerSocket.on('clickedTap', (commandType) => {
        controllerSocket.broadcast.emit('drawTap')
        controllerSocket.broadcast.emit('allowInteraction', commandType)
      })

      controllerSocket.on('clickedSlider', (commandType) => {
        console.log("Slider was clicked!")
        controllerSocket.broadcast.emit('drawSlider')
        controllerSocket.broadcast.emit('allowInteraction', commandType)
      })

      controllerSocket.on('sendCommand', (commandType)=> {
        controllerSocket.broadcast.emit('allowInteraction', commandType)
      })


    });
};
