const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to Mongodb server");
  }
  console.log("Connected to Mongodb server");
  const db = client.db("TodoApp");
  db
    .collection("Users")
    .findOneAndUpdate(
      { _id: new ObjectID("5aa44fe871bdee930c173ea6") },
      {
        $set: {
          name: "G $"
        },
        $inc: {
          age: 1
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(JSON.stringify(result, undefined, 2));
    });
  // client.close();
});
