module.exports = function(io) {
    io.on('connection', function(controllerSocket) {
      controllerSocket.on('clearButtonClicked', data => {
        controllerSocket.broadcast.emit('clearCanvas')
      })

      controllerSocket.on('ellipseButtonClicked', () => {
        controllerSocket.broadcast.emit('drawEllipse')
      })

      controllerSocket.on('clickedColorEllipse', () => {
        controllerSocket.broadcast.emit('drawColorEllipse')
      })

      controllerSocket.on('clickedWhiteEllipse', () => {
        controllerSocket.broadcast.emit('drawWhiteEllipse')
      })

      controllerSocket.on('clickedSnake', ()=> {
        controllerSocket.broadcast.emit('drawSnake')
      })



    });
};
