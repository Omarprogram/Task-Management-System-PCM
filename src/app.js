//app.js
import express from "express";
import pg from "pg";
import tasks from "./routes/tasks.routes.js";

const app = express();
const port = 5000;
const URL = "http://localhost:";

app.use(express.json());

app.use(express.static("public"));

app.use("/api", tasks);


app.listen(port, () => {
  console.log(`Server is running on: ${URL}${port}`);
});