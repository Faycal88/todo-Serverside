const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Todo = require("../models/todos");
const User = require("../models/users");

function login(req, res) {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        const FirstTodo = new Todo({
          todos: [
            {
              text: "This is a sample todo",
              isDone: "false",
            },
          ],
        });
        FirstTodo.save().then((list) => {
          const newUser = new User({
            email: req.body.email,
            list: list.id.toString(),
          });
          newUser.save().then((user) => {
            res.status(201).json({
              message: "Wellcome",
              email: user.email,
              token: jwt.sign(
                {
                  id: user._id,
                  email: user.email,
                },
                process.env.TOKEN_SECRET
              ),
            });
          });
        });
      } else
        res.status(200).json({
          message: "Wellcome back!",
          email: user.email,
          token: jwt.sign(
            {
              id: user._id,
              email: user.email,
            },
            process.env.TOKEN_SECRET
          ),
        });
    })
    .catch(console.log());
}

module.exports = {
  login,
};
