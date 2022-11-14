var express = require("express");
var router = express.Router();
const { addTodo, getList } = require("../controllers/todo");

router.post("/add", addTodo);
router.get("/get", getList);

module.exports = router;
