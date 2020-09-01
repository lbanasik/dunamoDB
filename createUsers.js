var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Users";

var name = 'lukasz4';
var email = 'temp4@email.com';
var yearOfBearth = 2001;

var params = {
    TableName: table,
    Item:{
        "name": name,
        "email": email,
        "yearOfBearth": yearOfBearth
    }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});