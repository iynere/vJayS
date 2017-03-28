module.exports = function(io) {
    io.on('connection', function(mobileSocket) {

      mobileSocket.on('mouse_position', (data)=>{
        mobileSocket.broadcast.emit('sendMousePostoMain', data)
      })

      mobileSocket.on('getInterface', ()=>{
        mobileSocket.broadcast.emit('getCommandType')
      })

      mobileSocket.on('emojiClicked', (emoji)=>{
       mobileSocket.broadcast.emit('drawEmoji', emoji)
     })

      mobileSocket.on('tappingScreen', ()=>{
       mobileSocket.broadcast.emit('updateTapValue')
     })

    });
};
