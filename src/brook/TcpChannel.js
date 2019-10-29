var net = require('net');
var codec = require('./TcpCodec.js');

//https://blog.csdn.net/ma_shen/article/details/80835431
var clientSocket;
var serverSocket;

var downstreamBuffer;
var upstreamBuffer = [];

var channel = {};

var decodeData = function(downstreamData, callback) {
    if (downstreamBuffer) {
        downstreamBuffer = Buffer.concat([downstreamData]);
    } else {
        downstreamBuffer = downstreamData;
    }

    codec.delimiterDecoder(downstreamBuffer, function(downstreamData, packetData, callback) {
        if (packetData) {
            console.log('---------------> delimiterDecoder packetData: ' + packetData);
            serverSocket.write(packetData);
        }
    });
}

var encodeData = function(upstreamPacket, callback) {
    upstreamBuffer.push(upstreamPacket);

    upstreamBuffer.forEach(function(packet) {
        codec.delimiterEncoder(packet, function(packetData) {
            callback(packetData);
        });
    });
}

channel.open = function (clientSocket, serverHost, serverPort, callback) {

    try {
        clientSocket.on('data', function(data) {
            console.log('---------------> data: ' + data);

            if (serverSocket) {
                // serverSocket.write(data);
                decodeData(data, null);
            } else {
                serverSocket = net.connect(serverPort, serverHost, function() {
                    // serverSocket.write(data);
                    decodeData(data, null);
                });
                serverSocket.on('data', function(data) {
                    clientSocket.write(data);
                });
                serverSocket.on('end', function() {
                    clientSocket.end();
                    clientSocket = null;
                    console.error('---------------> serverSocket 连接断开');
                    callback();
                });
                serverSocket.on('error', function(error) {
                    console.error('---------------> serverSocket has error ' + error);
                    clientSocket.end();
                });
                serverSocket.on('timeout', function() {
                    clientSocket.end();
                    clientSocket = null;
                    console.error('---------------> serverSocket 超时');
                    callback();
                });
            }
    
        });
        clientSocket.on('end', function() {
            serverSocket.end();
            serverSocket = null;
            console.error('---------------> clientSocket 连接断开');
            callback();
        });
        clientSocket.on('error', function(error) {
            console.error('---------------> clientSocket has error ' + error);
            serverSocket.end();
        });
        clientSocket.on('timeout', function() {
            serverSocket.end();
            serverSocket = null;
            console.error('---------------> clientSocket 超时');
            callback();
        });
    } catch (error) {
        console.error('---------------> tcp channel has error ' + error);
    }
    
    return this;
}

channel.close = function (callback) {
    try {
        if (clientSocket) {
            clientSocket.end();
        }
    } catch (error) {
        console.error('---------------> close has error ' + error);
    }
}

channel.writeToServer = function (data) {
    try {
        if (serverSocket) {
            serverSocket.write(data);
        }
    } catch (error) {
        console.error('---------------> writeToServer has error ' + error);
    }
}

channel.writePacketToServer = function (packet) {
    encodeData(packet, function(packetData) {
        channel.writeToServer(packetData);
    });
}

channel.writeToClient = function (data) {
    try {
        if (clientSocket) {
            clientSocket.write(data);
        }
    } catch (error) {
        console.error('---------------> writeToClient has error ' + error);
    }
}

channel.writePacketToClient = function (packet) {
    encodeData(packet, function(packetData) {
        channel.writeToClient(packetData);
    });
}

module.exports = channel;