//tasks.controllers.js
import db from "../db.js";

export const getAllTasks = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM tasks");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};

export const addTasks = async (req, res) => {
  const { title, completed } = req.body;
  try {
    const insertTask = await db.query("INSERT INTO tasks(title, completed)VALUES($1, $2) RETURNING *", [title, completed]);
    res.json(insertTask.rows);
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
};

export const editTasks = async (req, res) => {
  const id = req.params.id;
  const { title, completed } = req.body;
  try {
    const editTask = await db.query("UPDATE tasks SET title=$2, completed=$3 WHERE id=$1 RETURNING *", [id, title, completed]);
    res.json(editTask.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server error" });
  }
};
export const deleteTasks = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteTask = await db.query("DELETE from tasks WHERE id=$1 RETURNING *", [id]);
    res.json(deleteTask.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "task not found" });
  }
};  