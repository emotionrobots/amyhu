var express = require("express");
var router = express.Router();

var AWS = require('aws-sdk');
AWS.config.loadFromPath('credentials.json');
AWS.config.update({region: "us-west-2"});

const tableName = "PEOPLE_COUNTER"
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
var docClient = new AWS.DynamoDB.DocumentClient();

router.get("/", function(req, res, next) {
    var params = {
        TableName: tableName
    };

    docClient.scan(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var items = [];
            for (var i in data.Items)
                items.push(data.Items[i]);
                //items.push(data.Items[i]['device']);

            res.contentType = 'application/json';
            res.send(items);
        }
    });
});

module.exports = router;
