const BROKER_URL = "mqtt://52.43.181.166";
const TOPIC_NAME = "topic1";
const CLIENT_ID = "publish.js";
//var obj = {"name":"Amyy","age":"four"};
function MyClass() {
    this.a = "1a";
    this.b = "1b";
    this.c = 100;
    this.d = {
        da : "1da",
        dc : 200
    };
}
var obj  = new MyClass;


var MQTT = require("mqtt");
var client  = MQTT.connect(BROKER_URL, {clientId: CLIENT_ID});

client.on("connect", onConnected);

function onConnected()
{
 //client.publish(TOPIC_NAME, "Hello MQTT from NodeJS!");
  client.publish(TOPIC_NAME, JSON.stringify(obj));
  client.end();
}
