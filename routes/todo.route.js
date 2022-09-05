const router = require("express").Router();
const controllers = require("../controllers/todo.controller");

// Create a todo
router.post("/", controllers.createTodo);
router.get("/", controllers.getTodos);
router.get("/:id", controllers.getOneTodo);
router.put("/:id", controllers.updateTodo);
router.delete("/:id", controllers.deleteTodo);

module.exports = router;
