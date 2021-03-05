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
var ddbDocumentClient = new AWS.DynamoDB.DocumentClient();

// Get a single item with the getItem operation and Document Client
async function logSingleItemDdbDc(){
    try {
        var params = {
            Key: {
             "deviceid": 36, 
             //"song": "Carrot Eton"
            }, 
            TableName: tableName
        };
        var result = await ddbDocumentClient.get(params).promise()
        console.log(JSON.stringify(result))
    } catch (error) {
        console.error(error);
    }
}
logSingleItemDdbDc()

/*async function logSingleItem(){
    try {
        var params = {
            Key: {
             "deviceid": {"N": "36"}, 
             //"latitude": {"N": "566"}
            }, 
            TableName: tableName
        };
        var result = await dynamodb.getItem(params).promise()
        console.log(JSON.stringify(result))
    } catch (error) {
        console.error(error);
    }
}
logSingleItem()*/