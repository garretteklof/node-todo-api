const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");

const id = "5aa457bf1caab6dd3582501c";

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log("ID not found");
    }
    console.log("User:", user);
  })
  .catch(e => console.log(e));
