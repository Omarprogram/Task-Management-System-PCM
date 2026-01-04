//app.js
import express from "express";
import pg from "pg";
import cors from "cors";
import tasks from "./src/routes/tasks.routes.js";

const app = express();
app.use(cors());
const port = 5000;
const URL = "http://localhost:";

app.use(express.json());

app.use(express.static("public"));

app.use("/api", tasks);


app.listen(port, () => {
  console.log(`Server is running on: ${URL}${port}`);
});