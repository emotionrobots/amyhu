var express = require("express");
var router = express.Router();

var AWS = require('aws-sdk');
var dynamo = require('dynamodb');
dynamo.AWS.config.loadFromPath('credentials.json');
dynamo.AWS.config.update({region: "us-west-2"});

const client = new AWS.DynamoDB.DocumentClient();
const tableName = 'pcentrys';

router.get("/", function(req, res, next) {
    res.send("API is working properly with DynamoDB");
});

module.exports = router;
