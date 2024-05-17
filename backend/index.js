import express from "express";

import { createTodo, updateTodo } from "./types";

const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.parse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "Invalid Inputs",
    });
    return;
  }
});

app.get("/todos", (req, res) => {
  const todos = req.headers.id;
  updateTodo.parse(todos);
});

app.put("/completed", (req, res) => {});

app.listen(3000, console.log("Port 3000"));
