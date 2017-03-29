module.exports = function(io) {
    io.on('connection', function(djSocket) {
      //dj socket for controlling video
      djSocket.on('changeOpacity', (opacity) => {
        djSocket.broadcast.emit('changeOutputOpacity', opacity)
      })

      djSocket.on('changeHueRotation', (hueRotation, direction) => {
          console.log("Hue changing!!")
          djSocket.broadcast.emit('changeVideoHue', hueRotation, direction)
       })

      djSocket.on('changeVolume', (volume) => {
        djSocket.broadcast.emit('changeVideosVolume', volume)
      })

      djSocket.on('skipVideoPressed', (direction) => {
        djSocket.broadcast.emit('skipVideo', direction)
      })

      djSocket.on('playBothPressed', (playing) => {
        djSocket.broadcast.emit('playBothVideos', playing)
      })

    })
}
