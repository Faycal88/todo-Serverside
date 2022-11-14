var express = require("express");
var router = express.Router();
const { login } = require("../controllers/users");

router.post("/", login);

module.exports = router;
