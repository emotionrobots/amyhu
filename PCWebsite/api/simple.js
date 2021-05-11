var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var AWS = require('aws-sdk');
var dynamo = require('dynamodb');
AWS.config.update({region: "us-west-2"});
dynamo.AWS.config.loadFromPath('credentials.json');

var http = require('http');
var https = require('https');
var fs = require('fs');


const BROKER_URL = "mqtt://pplcnt-mqtt.e-motion.ai";
const TOPIC_NAME = "topic1";
const CLIENT_ID = "subscribe.js";
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

//--------------------------------------------------------
//  Setup up MQTT integration
//--------------------------------------------------------
var MQTT = require("mqtt");
var client  = MQTT.connect(BROKER_URL, {clientId: CLIENT_ID});
var totalEnter = 0;
var totalExit = 0;
var totalPeople = 0;
var monthlyEnter = 0;
var monthlyExit = 0;

// 11 pm closing time
var endOfDay = "23"

var currentMonth = ""

//create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

client.on("connect", onConnected);
client.on("message", onMessageReceived);

//--------------------------------------------------------
function onConnected()
{
  console.log('MQTT connected');
  client.subscribe(TOPIC_NAME);
}


//--------------------------------------------------------
function onMessageReceived(topic, message)
{
  console.log(topic);

  try {
    const js = JSON.parse(message);

    totalEnter += js.enter;
    totalExit += js.exit;
    totalPeople = totalEnter - totalExit;
    monthlyEnter += js.enter;
    monthlyExit += js.exit;

   // updating month, only executed once
    if (currentMonth == ""){
      currentMonth = js.month;
    }
        
    // changing month
    if (js.month != currentMonth) {
      var month = monthNames[currentMonth];
      var month_params = {
      TableName: 'PEOPLE_COUNTER',
      Item: {
                'device_id' : {N: js.deviceid.toString()}, 
                'device' : {S: js.device}, 
                'longitude' : {N: js.longitude.toString()},
                'latitude' : {N: js.latitude.toString()},
                'location' : {S: js.location},
                'datetime' : {S: month},
                'time' : {N: js.month.toString()},
                'day' : {N: js.month.toString()},
                'month' : {N: js.month.toString()},
                'year' : {N: js.month.toString()},
                'weekday' : {N: js.month.toString()},
                'enter' : {N: monthlyEnter.toString()},
                'exit' : {N: monthlyExit.toString()},
                'peopleinbuilding' : {N: "0"},
        }
      };

      ddb.putItem(month_params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data);
        }
      });
      
      currentMonth = js.month;
      monthlyEnter = 0;
      monthlyExit = 0;
    }  // if
    
    // normal write to table
    var params = {
      TableName: 'PEOPLE_COUNTER',
      Item: {
        'device_id' : {N: js.deviceid.toString()}, 
        'device' : {S: js.device}, 
        'longitude' : {N: js.longitude.toString()},
        'latitude' : {N: js.latitude.toString()},
        'location' : {S: js.location},
        'datetime' : {S: js.datetime},
        'time' : {N: js.time.toString()},
        'day' : {N: js.day.toString()},
        'month' : {N: js.month.toString()},
        'year' : {N: js.year.toString()},
        'weekday' : {N: js.weekday.toString()},
        'enter' : {N: totalEnter.toString()},
        'exit' : {N: totalExit.toString()},
        'peopleinbuilding' : {N: totalPeople.toString()},
      }
    };

    ddb.putItem(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    });

    // adding current row to table  
    var current_params = {
      TableName: 'PEOPLE_COUNTER',
      Item: {
        'device_id' : {N: js.deviceid.toString()}, 
        'device' : {S: js.device}, 
        'longitude' : {N: js.longitude.toString()},
        'latitude' : {N: js.latitude.toString()},
        'location' : {S: js.location},
        'datetime' : {S: 'current'},
        'time' : {N: js.time.toString()},
        'day' : {N: js.day.toString()},
        'month' : {N: js.month.toString()},
        'year' : {N: js.year.toString()},
        'weekday' : {N: js.weekday.toString()},
        'enter' : {N: totalEnter.toString()},
        'exit' : {N: totalExit.toString()},
        'peopleinbuilding' : {N: totalPeople.toString()},
      }
    };

    ddb.putItem(current_params, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    });
      
    if (js.time == "23"){
      totalEnter = 0;
      totalExit = 0;
      totalPeople = 0;
    }
  }
  catch (e) {
    console.log("JSON error");
    console.log(message.toString());
  }
} 

//--------------------------------------------------------
function isJson(str) {
  try {
    return JSON.parse(str);
    } catch (e) {
      return false;
     }
 }

//--------------------------------------------------------
//  Setup up HTTPS integration
//--------------------------------------------------------
/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(9000);
*/


var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testAPI");
var testdynamoRouter = require("./routes/testdynamo");

app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/testAPI", testAPIRouter);
app.use("/api/testdynamo", testdynamoRouter);

const httpServer = http.createServer(app).listen(9000);



