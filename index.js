/*
  Copyright (C) Air Liquide S.A,  2017-2018
  Author: Sébastien Lalaurette, La Factory, Creative Foundry
  This file is part of Predictable Farm project.

  The MIT License (MIT)

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
   
  See the LICENSE.txt file in this repository for more information.
*/

//var socket = require('socket.io-client')('http://192.168.1.1:3000/',{ query: 'role=sensor&sensorId=1'});
//var socket = require('socket.io-client')('http://11.22.33.44:3000/',{ query: 'role=sensor&sensorId=42'}); //test capteur
//var socket = require('socket.io-client')('http://my.specific.domaine.name/',{ path:'/socket.io',query:'role=sensor&sensorId=1'}); //localtest
//var socket = require('socket.io-client')('http://11.22.33.44:3000/',{ query: 'farmId=farm1'}); // bridge
var socket = require('socket.io-client')('http://localhost:4003/',{ query: 'role=sensor&sensorId=1'}); //localtest

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
    console.log("Connect error");
    // console.log(e)
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
        i = i + 1;
        if (i < 5000000) {
            setTimeout(sendData,4000)
        }
    }
    setTimeout(sendData, 1);
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
