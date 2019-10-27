var net = require('net')

var TcpService = {};

var serverSocket;

TcpService.testSum = function (a, b) {
    return a + b;
}

TcpService.startServer = function (listenPort) {

    try {
        serverSocket = net.createServer(function (clientSocket) {
            console.log('---------------> 新的连接');
            //新的连接
            clientSocket.on('connect', function() {
                console.log('连接成功: ' + clientSocket.remoteAddress + ':' + clientSocket.remotePort);
            });
            clientSocket.on('data', function(data) {
                console.log('---------------> data: ' + data);
                clientSocket.write(data);
            });
            clientSocket.on('end', function() {
                console.log('连接断开: ' + clientSocket.remoteAddress + ':' + clientSocket.remotePort);
            });
        });
    
        serverSocket.listen(listenPort, function() {
            console.log('开启服务器监听: ' + listenPort);
        });
    } catch (error) {
        console.log('开启服务器监听出错: ' + error);
    }
    return this;
}

TcpService.stopServer = function () {
    try {
        if (serverSocket) {
            serverSocket.close();
        }
    } catch (error) {
        console.log('停止服务器监听出错: ' + error);
    }
}

module.exports = TcpService;