module.exports = function(io) {
    io.on('connection', function(djSocket) {
      //dj socket for controlling video
      djSocket.on('changeOpacity', (opacity) => {
        djSocket.broadcast.emit('changeOutputOpacity', opacity)
      })

      djSocket.on('changeHueRotation', (hueRotation, direction) => {
          djSocket.broadcast.emit('changeVideoHue', hueRotation, direction)
       })

      djSocket.on('changeInvertPercent', (invertPercent, direction) => {
          djSocket.broadcast.emit('changeVideoInvert', invertPercent, direction)
       })

      djSocket.on('changeSaturationPercent', (saturationPercent, direction) => {
          djSocket.broadcast.emit('changeVideoSaturate', saturationPercent, direction)
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
