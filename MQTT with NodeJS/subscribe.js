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
  client.publish("topic2","Message Received");
}

function onMessageReceived(topic, message)
{
  //const json = JSON.stringify(new String(message));
  console.log(topic);
  //console.log(message.toString());
  if (isJson(message)) {
    const js = JSON.parse(message);
    console.log(js);
  } else {
    console.log(message.toString());
  } 
  //console.log(json);
  //console.log(js);
  console.log("");
  //client.publish("topic2", "Message Received");
  //client.end();
}

function isJson(str) {
  try {
    return JSON.parse(str);
    } catch (e) {
      return false;
     }
 }




