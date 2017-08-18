/**
 * Created by admin on 27/02/2017.
 */
//var socket = require('socket.io-client')('http://192.168.1.191:3000/',{ query: 'role=sensor&sensorId=1'});
//var socket = require('socket.io-client')('http://52.59.94.92:3000/',{ query: 'role=sensor&sensorId=42'}); //test recette
//var socket = require('socket.io-client')('http://52.58.113.84:3000/',{ query: 'role=sensor&sensorId=42'}); //test capteur
var socket = require('socket.io-client')('http://localhost:4003/',{ query: 'role=sensor&sensorId=1'}); //localtest
//var socket = require('socket.io-client')('http://35.158.33.67:4003/',{ query:'role=sensor&sensorId=1'}); //localtest
//var socket = require('socket.io-client')('http://ecf-berlin-socket.predictable.farm/',{ path:'/socket.io',query:'role=sensor&sensorId=1'}); //localtest
/*var socket = require('socket.io-client')('http://playground.predictable.farm/',{
    path:'/socket/socket.io',
    query: 'role=sensor&sensorId=1'}); //test berlin*/
/*var socket = require('socket.io-client')('http://ecf-berlin.predictable.farm',{
    path: '/socket/socket.io',
    query: 'role=sensor&sensorId=1'}); //test berlin*/
//var socket = require('socket.io-client')('http://35.158.33.67:3000/',{ query: 'farmId=farm1'}); // bridge
var SocketActions = require('./SocketActions');

var i = 0;
var mode1 = '0';
var mode2 = '0';
var mode3 = '0';
var mode4 = '0';

var types =[
    'air_pressure',
    'air_co2',
    'air_co',
    'air_temperature',
    'air_humidity',
    'light_lux',
    'light_par',
    //'light_dli',
    'light_uv',
    'water_temperature',
    'water_ph',
    'water_ec',
    'water_orp',
    'water_do',
    'moisture'
];

var relaystate = 0;

socket.on('connect_error', function(e) {
    //console.log("error");
    //console.log(e)
});

socket.on('connect', function(){
    console.log("TEST : connected to server");
    function sendData(){
        var index = getRandomInt(0,types.length-1);
        var value = getRandomInt(0,100);
        var _data = {
            'device_id': '1',
            'sensor_type': types[0],
            'sensor_id': '1',
            'sensor_value': '10.1'//getRandomInt(0,100)
        };
        value = getRandomInt(0,100).toString();
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[0],
            'sensor_id': '1',
            'sensor_value': '10.1'
        }));
        value = getRandomInt(0,100).toString();
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[1],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100).toString();
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[2],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100).toString();
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[3],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100).toString();
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[4],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100).toString();
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[5],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100).toString();
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[6],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100).toString();
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[7],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100).toString();
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[8],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100).toString();
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[9],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100).toString();
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[10],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100).toString();
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[11],
            'sensor_id': '1',
            'sensor_value': value
        }));
        value = getRandomInt(0,100).toString();
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[12],
            'sensor_id': '1',
            'sensor_value': value
        }));
        /*value = getRandomInt(0,100).toString();
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': types[13],
            'sensor_id': '1',
            'sensor_value': value
        }));*/


        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': 'relay1',
            'sensor_id': '1',
            'sensor_value': relaystate.toString(),
            'sensor_mode':mode1
        }));
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': 'relay2',
            'sensor_id': '1',
            'sensor_value': "1",
            'sensor_mode':mode2
        }));
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': 'relay3',
            'sensor_id': '1',
            'sensor_value': "0",
            'sensor_mode':mode3
        }));
        socket.emit(SocketActions.SENSOR_EMIT,JSON.stringify({
            'device_id': '1',
            'sensor_type': 'relay4',
            'sensor_id': '1',
            'sensor_value': "1",
            'sensor_mode':mode4
        }));
        console.log(i);
        i = i+1;
        if (i<5000000)
            setTimeout(sendData,4000)
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
    relaystate = 1-relaystate;
    var data = JSON.parse(JSON.parse(data));
    if (data.sensor_type == "relay1"){
        var v = Number.parseInt(mode1);
        mode1 = (1 - v).toString();
        console.log("SWITCHED MODE1 :", mode1)
    }
    if (data.sensor_type == 'relay2'){
        var v = Number.parseInt(mode2);
        mode2 = (1 - v).toString();
        console.log("SWITCHED MODE2 :", mode2)
    }
    if (data.sensor_type == 'relay3'){
        var v = Number.parseInt(mode3);
        mode3 = (1 - v).toString();
        console.log("SWITCHED MODE3 :", mode3)
    }
    if (data.sensor_type == 'relay4'){
        var v = Number.parseInt(mode4);
        mode4 = (1 - v).toString();
        console.log("SWITCHED MODE4 :", mode4)

    }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





