/**
 * Created by admin on 27/02/2017.
 */
//var socket = require('socket.io-client')('http://192.168.1.191:3000/',{ query: 'role=sensor&sensorId=1'});
//var socket = require('socket.io-client')('http://52.59.94.92:3000/',{ query: 'role=sensor&sensorId=2'});
var socket = require('socket.io-client')('http://localhost:3000/',{ query: 'role=sensor&sensorId=1'});
//var socket = require('socket.io-client')('http://35.158.33.67:3000/',{ query: 'farmId=farm1'});
var SocketActions = require('./SocketActions');

var i = 0;

var types =[
    'air_pressure',
    'air_co2',
    'air_temperature',
    'air_humidity',
    'light_lux',
    'light_par',
    'light_dli',
    'light_uv',
    'water_temperature',
    'water_ph',
    'water_ec',
    'water_orp',
    'water_do',
    'moisture'
];

var relaystate = 0;

socket.on('connect', function(){
    console.log("TEST : connected to server");
    function sendData(){
        var index = getRandomInt(0,types.length-1);
        var value = getRandomInt(0,100);
        var _data = {
            'device_id': '1',
            'sensor_type': types[0],
            'sensor_id': '1',
            'sensor_value': getRandomInt(0,100)
        };
        //console.log(_data);
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[0],
            'sensor_id': '1',
            'sensor_value': getRandomInt(0,100)
        }));
        value = getRandomInt(0,100);
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[1],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100);
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[2],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100);
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[3],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100);
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[4],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100);
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[5],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100);
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[7],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100);
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[8],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100);
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[9],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100);
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[10],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100);
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[11],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100);
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[12],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100);
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[13],
            'sensor_id': '1',
            'sensor_value': value
        }));
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': 'relay1',
            'sensor_id': '1',
            'sensor_value': 0
        }));
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': 'relay2',
            'sensor_id': '1',
            'sensor_value': 1
        }));
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': 'relay3',
            'sensor_id': '1',
            'sensor_value': 0
        }));
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': 'relay4',
            'sensor_id': '1',
            'sensor_value': 1
        }));
        console.log(i);
        i = i+1;
        if (i<500000)
            setTimeout(sendData,1000)
    }
    setTimeout(sendData,1);
});
socket.on('event', function(data){

});
socket.on('disconnect', function(){
    console.log("disconnected");
});
socket.on('error', function(error){
    console.log(error);
});

socket.on('sensor-receive', function(data){
    console.log(data);
    relaystate = 1-relaystate;
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





