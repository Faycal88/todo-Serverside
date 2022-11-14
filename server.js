const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { urlencoded } = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const User = require("./models/users");
require("dotenv").config();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "127.0.0.1",
      "https://63719ae4d8fd82401abf50af--lighthearted-baklava-d91377.netlify.app/",
    ],
    credentials: true,
  })
);

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.log(e);
  })
  .then(() => {
    console.log("succesfully connected to db");
  });

const UserRouter = require("./routes/users");
const { verifyToken } = require("./middleware/verifyToken");
const TodoRouter = require("./routes/todo");

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
var jsonparser = bodyParser.json();
app.use(urlencoded({ extended: true }));
app.use(jsonparser);

app.use("/login", UserRouter);
app.use("/getToken", verifyToken);
app.use("/todo", TodoRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
