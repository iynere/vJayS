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
       console.log("emojiClicked", emoji);
       mobileSocket.broadcast.emit('drawEmoji', emoji)
     })
    
    });
};
