module.exports = function(io) {
  
  // have Output refetch queue from Store every time it's resorted
  io.on('connection', function(queueSocket) {
    queueSocket.on('queueLeftUpdated', updatedQueueLeft => {
      queueSocket.broadcast.emit('receiveUpdatedQueueLeft', updatedQueueLeft)
    })
    
    queueSocket.on('queueRightUpdated', updatedQueueRight => {
      queueSocket.broadcast.emit('receiveUpdatedQueueRight', updatedQueueRight)
    })
  })
}
