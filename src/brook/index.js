var net = require('net');
var logger = require('log4js').getLogger('brook');

var TcpService = require('./TcpService.js');


TcpService.startServer(1921);
