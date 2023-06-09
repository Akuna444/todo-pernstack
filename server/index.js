const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("This app started at port 5000");
});

//post todos
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;

    const newTodo = await pool.query(
      "INSERT INTO todo (description)  VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
    console.log(req.body);
  } catch (err) {
    console.log(err);
  }
});
//get all todos

app.get("/todos", async (req, res) => {
  try {
    const getAllTodos = await pool.query("SELECT * FROM todo");
    res.json(getAllTodos.rows);
  } catch (error) {
    console.log(error);
  }
});
//get todos

app.get("/todos/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const getTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(getTodo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

//update todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { description } = req.body;
    const { id } = req.params;
    const updatedTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.json(updatedTodo);
  } catch (error) {
    console.log(error.message);
  }
});

//delete toddo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(deleteTodo);
  } catch (error) {
    console.log(error);
  }
});
