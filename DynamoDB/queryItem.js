// Load the AWS SDK for JS
var AWS = require("aws-sdk");

// Set a region to interact with (make sure it's the same as the region of your table)
AWS.config.loadFromPath('credentials.json');
AWS.config.update({region: 'us-west-2'});

// Set a table name that we can use later on
const tableName = "pcentrys"

// Create the Service interface for DynamoDB
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// Create the Document Client interface for DynamoDB
var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Querying for pcentry with id 36.");

var params = {
    KeyConditionExpression: 'deviceid = :deviceid',
    ExpressionAttributeValues: {
          ':deviceid': 36
         },
 TableName: tableName
};

docClient.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log(" -", item.deviceid + ": " + item.enter);
        });
    }
});
