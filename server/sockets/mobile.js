module.exports = function(io) {
    io.on('connection', function(mobileSocket) {

      mobileSocket.on('mouse_position', (data)=>{
        mobileSocket.broadcast.emit('sendMousePostoMain', data)
      })
    });
};
