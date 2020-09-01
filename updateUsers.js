var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient()

var table = "Users";

var email = 'temp@email.com';

// Update the item, unconditionally,

var params = {
    TableName:table,
    Key:{
        "email": email
    },
    UpdateExpression: "set nowaWartosc.login = :l",
    ExpressionAttributeValues:{
        ":l": 'banan3'
    },
    ReturnValues:"UPDATED_NEW"
};

console.log("Updating the item...");
docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
});

