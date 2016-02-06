var	express = require('express');
var app = express();

var	PORT = 8080,
	running = false,
	server = null;

startServer(PORT);

module.exports = {
	start: startServer,
	stop: stopServer
};

app.use('/', express.static(__dirname + '/../static'));

app.use(function(req, res, next) {
	res.setHeader("Connection", "close");
	return next();
});

function startServer(port) {
	var startTime;

	if (server && running) {
		console.error('Server already running on port', app.address().port);
		return;
	}
	server = app.listen(port);
	server.on('listening', function() {
		startTime = new Date();
		console.info('Server running on port ' + port, {
			startTime: startTime
		});
		running = true;
	});
	server.on('close', function() {
		var stopTime = new Date();
		console.info('Shutting down server', {
			startTime: startTime,
			stopTime: stopTime,
			runTimeDuration: stopTime - startTime
		});
		running = false;
	});
	server.on('error', function(err) {
		var stopTime = new Date();
		console.error('Server fatal error!', {
			err: err,
			startTime: startTime,
			stopTime: stopTime,
			runTimeDuration: stopTime - startTime
		});
		running = false;
	});
}

function stopServer() {
	if (server && running) {
		server.close();
	}
}
