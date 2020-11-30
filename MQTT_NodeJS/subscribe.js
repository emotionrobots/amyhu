const BROKER_URL = "mqtt://52.43.181.166";
const TOPIC_NAME = "topic1";
const CLIENT_ID = "subscribe.js";

var MQTT = require("mqtt");
var client  = MQTT.connect(BROKER_URL, {clientId: CLIENT_ID});

client.on("connect", onConnected);
client.on("message", onMessageReceived)

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

