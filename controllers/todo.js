const Todo = require("../models/todos");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

function addTodo(req, res) {
  const token = req.headers.authorization;
  const user = jwt.decode(token);
  User.findOne({ email: user.email }).then((user) => {
    if (user) {
      Todo.findByIdAndUpdate(
        user.list,
        { todos: req.body.list },
        { upsert: true },
        (err, todo) => {
          err
            ? res.status(304)
            : res.status(201).json({
                todo,
              });
        }
      );
    }
  });
}

function getList(req, res) {
  const token = req.headers.authorization;
  const user = jwt.decode(token);
  User.findOne({ email: user.email })
    .populate("list")
    .then((user) => {
      res.status(200).json({
        data: user,
      });
    });
}

module.exports = {
  addTodo,
  getList,
};
