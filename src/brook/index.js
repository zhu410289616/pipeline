var net = require('net');
var logger = require('log4js').getLogger('brook');

var TcpService = require('./TcpService.js');


TcpService.startServer(1921);
TcpService.startProxy(4522, '127.0.0.1', 1921);
