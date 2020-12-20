//import * as Joi from "/home/ubuntu/MQTT_NodeJS/node_modules/dynamodb/node_modules/joi"
const Joi = require('joi');
var dynamo = require('dynamodb');
dynamo.AWS.config.loadFromPath('credentials.json');
dynamo.AWS.config.update({region: "us-west-2"});
var Account = dynamo.define('Account', {
  hashKey : 'email',
 
  // add the timestamp attributes (updatedAt, createdAt)
  timestamps : true,
 
  schema : {
    email   : Joi.string().email(),
    name    : Joi.string(),
    age     : Joi.number(),
    roles   : dynamo.types.stringSet(),
    settings : {
      nickname      : Joi.string(),
      acceptedTerms : Joi.boolean().default(false)
    }
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
var acc = new Account({email: 'test@example.com', name: 'Test Example', age: 22});
acc.save(function (err) {
  if( err ) {
    console.log('error in saving account', err);
  } else {
    console.log('created account in DynamoDB', acc.get('email'));
  }
});
*/
async function asyncCall() {
try {
  var acc = new Account({email: 'test@example.com', name: 'Test Example'});
  await acc.save();
  console.log('created account in DynamoDB', acc.get('email'))
} catch( err ) {
  console.log('error in saving account', err);
}
}

asyncCall();
