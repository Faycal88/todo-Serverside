var express = require("express");
var router = express.Router();
const { addTodo, getList } = require("../controllers/todo");
const { verifyToken } = require("../middleware/verifyToken");

router.post("/add", verifyToken, addTodo);
router.get("/get", verifyToken, getList);

module.exports = router;
