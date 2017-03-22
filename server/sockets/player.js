module.exports = function(io) {
  io.on('connection', function(playerSocket) {

    playerSocket.on('leftVideoReady', data => {
      playerSocket.broadcast.emit('clearCanvas')
    })

    playerSocket.on('rightVideoReady', data => {
      playerSocket.broadcast.emit('drawEllipse')
    })
  })
}
