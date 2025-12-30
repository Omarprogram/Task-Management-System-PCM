//task.routes.js
import express from "express";
import { getAllTasks, addTasks, editTasks, deleteTasks } from "../controllers/tasks.controllers.js";
const router = express.Router();

router.get("/tasks", getAllTasks);
router.post("/tasks", addTasks);
router.put("/tasks/:id", editTasks);
router.delete("/tasks/:id", deleteTasks);

export default router;

