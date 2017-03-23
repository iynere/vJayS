module.exports = function(io) {
	io.on('connection', function(outputSocket) {
		outputSocket.on('outputScreenMounted', () => {
			console.log('OUTPUT SCREEN MOUNTED')
			outputSocket.broadcast.emit('outputReadyForPlayerVideos')
		})
	})
}
