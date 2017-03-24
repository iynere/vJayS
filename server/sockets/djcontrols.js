module.exports = function(io) {
    io.on('connection', function(djSocket) {
      //dj socket for controlling video
      djSocket.on('changeOpacity', (opacity) => {
        console.log("onchangeopacity", opacity)
        djSocket.broadcast.emit('changeOutputOpacity', opacity)
      })

    })
}
