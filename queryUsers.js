var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Querying for users older than 20years.");

var params = {
    TableName : "Users",
    KeyConditionExpression: "#em = :email2",
    ExpressionAttributeNames:{
        "#em": "email"
    },
    ExpressionAttributeValues: {
        ":email2": 'temp@email.com'
    }
};

docClient.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(user) {
            console.log(" -", user.name + ": " + user.email);
        });
    }
});