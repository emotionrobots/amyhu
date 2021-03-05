//Use this one
const Joi = require('joi');
var dynamo = require('dynamodb');
dynamo.AWS.config.loadFromPath('credentials.json');
dynamo.AWS.config.update({region: "us-west-2"});

const BROKER_URL = "mqtt://52.43.181.166";
const TOPIC_NAME = "topic1";
const CLIENT_ID = "subscribe.js";

var MQTT = require("mqtt");
var client  = MQTT.connect(BROKER_URL, {clientId: CLIENT_ID});

client.on("connect", onConnected);
client.on("message", onMessageReceived);

function onConnected()
{
  client.subscribe(TOPIC_NAME);
}

function onMessageReceived(topic, message)
{
  console.log(topic);
  //if (isJson(message)) {
  try {
    const js = JSON.parse(message);
    //console.log(js.device);
    var pc1 = new PCEntry({deviceid: js.deviceid, device: js.device, longitude: js.longitude, latitude: js.latitude, location: js.location, time: js.time, enter: js.enter, exit: js.exit, peopleinbuilding: js.peopleinbuilding,});
    pc1.save(function (err) {
     if( err ) {
      console.log('error in saving entry', err);
      } else {
      console.log('created entry in DynamoDB', pc1.get('deviceid'));
     }
    });
    console.log(message.toString());
    //console.log("Device="+js['device']);

  } catch (e) {
    console.log("JSON error");
    console.log(message.toString());
  } 
  console.log("");
}

function isJson(str) {
  try {
    return JSON.parse(str);
    } catch (e) {
      return false;
     }
 }

var PCEntry = dynamo.define('PCEntry', {
  hashKey : 'deviceid',
 
  // add the timestamp attributes (updatedAt, createdAt)
  timestamps : false,
 
  schema : {
    deviceid   : Joi.number(),
    device    : Joi.string(),
    longitude     : Joi.number(),
    latitude      : Joi.number(),
    location    : Joi.string(),
    time    : Joi.string(),
    enter     : Joi.number(),
    exit     : Joi.number(),
    peopleinbuilding     : Joi.number()
  }
});

dynamo.createTables(function(err) {
  if (err) {
    console.log('Error creating tables: ', err);
  } else {
    console.log('Tables has been created');
  }
});
/*
var pc1 = new PCEntry({deviceid: 12, device: 'rpiz', longitude: 22, latitude: 24, location: 'School', time: '12:13', enter: 5, exit: 1, peopleinbuilding: 4,});
pc1.save(function (err) {
  if( err ) {
    console.log('error in saving entry', err);
  } else {
    console.log('created entry in DynamoDB', pc1.get('deviceid'));
  }
});

var pc2 = new PCEntry({deviceid: 34, device: 'rpiz', longitude: 11, latitude: 48, location: 'Gym', time: '12:30', enter: 2, exit: 0, peopleinbuilding: 2,});
pc2.save(function (err) {
  if( err ) {
    console.log('error in saving entry', err);
  } else {
    console.log('created entry in DynamoDB', pc2.get('deviceid'));
  }
});
*/
