import express from "express";
import { createTodo, updateTodo } from "./types.js";
import { Todo } from "./db.js";

const app = express();
app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.parse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "Invalid Inputs",
    });
    return;
  }
  const newTodo = new Todo({ createPayload });
  await newTodo.save();
  res.status(200).json({
    message: "Todo Added Successfully",
  });
});

app.get("/todos", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.parse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "Invalid Inputs",
    });
    return;
  }
});

app.put("/completed", (req, res) => {});

app.listen(3000, console.log("Port 3000"));
