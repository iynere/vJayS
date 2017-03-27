module.exports = function(io) {
    io.on('connection', function(mobileSocket) {

      mobileSocket.on('mouse_position', (data)=>{
        mobileSocket.broadcast.emit('sendMousePostoMain', data)
      })

      mobileSocket.on('getInterface', ()=>{
        console.log("mobile asked to get interface");
        mobileSocket.broadcast.emit('getCommandType')
      })

      mobileSocket.on('emojiClicked', (emoji)=>{
       mobileSocket.broadcast.emit('drawEmoji', emoji)
     })

      mobileSocket.on('tappingScreen', ()=>{
       console.log("screen tap getting to mobile server");
       mobileSocket.broadcast.emit('changePlaybackRate', 2)
     })
    
    mobileSocket.on('movingSlider', (newValue)=>{
       console.log("moving slider on mobile phone");
       mobileSocket.broadcast.emit('updateSliderValue', newValue)
     })

    });
};
