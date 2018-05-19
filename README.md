# node-todo-api
A todo list API built with Node.js.

## Getting Started

For a local copy, clone the repo and from the command line: `npm install && npm start`. 

(However, this will be a fairly pointless exercise without your own database connection. Feel free to add a config.json file in the config folder with your own development MONGODBURI and JWT_SECRET).

### Features

This is a fully-functional todo API with the ability to login / logout users, as well as create, update, delete personal todos (via jsonwebtoken authentication). 

The API can be accessed [here](https://shielded-hollows-52507.herokuapp.com/). 

There is no UI, but there are endpoints. I recommend trying it out with an ADE, such as [Postman](https://www.getpostman.com/).

### Endpoints

#### Users

`POST /users` create a user _(email & password required)_

`GET /users/me` get current user

`POST /users/login` login user with credentials

`DELETE /users/me/token` logout user

#### Todos _(authentication required)_

`GET /todos` get todos of user

`POST /todos` create a todo _(text required)_

`GET /todos/:id` get specific todo

`DELETE /todos/:id` delete specific todo

`PATCH /todos/:id` update specific todo



## Running Tests

This is a fully tested API that uses [Mocha](https://mochajs.org/). To run the automated test suite, clone the repo locally, and run `npm test`.
