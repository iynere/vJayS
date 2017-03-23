module.exports = function(io) {
	io.on('connection', function(playerSocket) {
		playerSocket.on('playerMountedLeft', video => {
			playerSocket.broadcast.emit('sendVideoLeftToOutput', video)
		})

		playerSocket.on('playerMountedRight', video => {
			playerSocket.broadcast.emit('sendVideoRightToOutput', video)
		})
		
		playerSocket.on('playingVideoLeft', () => {
			playerSocket.broadcast.emit('playOutputVideoLeft')
		})
		
		playerSocket.on('playingVideoRight', () => {
			playerSocket.broadcast.emit('playOutputVideoRight')
		})
	})
}
