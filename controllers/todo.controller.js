const pool = require("../configs/conn");
const path = require("path");

// Create a new todo
const createTodo = async (req, res) => {
  try {
    const { description } = req.body;

    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// Get all todos
const getTodos = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");

    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
};

// Get one todo
const getOneTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// Update todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json({ message: "Todo was updated" });
  } catch (err) {
    console.error(err.message);
  }
};

// Delete todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json({ message: "Todo was deleted" });
  } catch (err) {
    console.log(err.message);
  }
};

// Catch all
const catchAll = (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
};

module.exports = {
  createTodo,
  getTodos,
  getOneTodo,
  updateTodo,
  deleteTodo,
  catchAll,
};
