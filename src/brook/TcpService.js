var net = require('net')
var channel = require('./TcpChannel.js')

var TcpService = {};



TcpService.testSum = function (a, b) {
    return a + b;
}

//======================================
// TCP 服务器逻辑
//======================================

var serverSocket;

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

//======================================
// TCP 代理服务逻辑
//======================================

var channelList = [];
var proxySocket;

TcpService.startProxy = function (listenPort, remoteHost, remotePort) {
    try {
        proxySocket = net.createServer(function (clientSocket) {
            console.log('---------------> 新的连接');
            var pc = channel.open(clientSocket, remoteHost, remotePort, function () {
                channelList.pop(pc);
            });
            channelList.push(pc);
        });
        
        proxySocket.listen(listenPort, function() {
            console.log('绑定proxy服务器:' + proxySocket + ':' +listenPort);
        });
    } catch (error) {
        
    }
}

TcpService.stopProxy = function () {
    try {
        if (proxySocket) {
            proxySocket.close();
        }
    } catch (error) {
        console.log('停止proxy服务器监听出错: ' + error);
    }
}

//======================================
// TCP 服务器逻辑
//======================================

var clientSocket;

TcpService.startClient = function (remoteHost, remotePort) {
    try {
        clientSocket = net.connect(remotePort, remoteHost, function() {
            console.log('连接服务器成功');
        });
        clientSocket.on('data', function(data) {
            console.log('data: ' + data);
        });
        clientSocket.on('end', function() {
            console.log('服务器关闭');
        });
    } catch (error) {
        
    }
}

TcpService.stopClient = function () {
    try {
        if (clientSocket) {
            clientSocket.close();
        }
    } catch (error) {
        console.log('断开客户端连接出错: ' + error);
    }
}

module.exports = TcpService;