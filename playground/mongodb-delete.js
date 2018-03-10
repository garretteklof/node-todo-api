const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to Mongodb server");
  }
  console.log("Connected to Mongodb server");
  const db = client.db("TodoApp");

  // db
  //   .collection("Users")
  //   .deleteMany({ name: "Hank" })
  //   .then(result => {
  //     console.log("Users were deleted", result);
  //   });

  db
    .collection("Users")
    .findOneAndDelete({ _id: new ObjectID("5aa4500c71bdee930c173ebb") })
    .then(results => {
      console.log(JSON.stringify(results, undefined, 2));
    });
  // client.close();
});
