import express from "express";
import "dotenv/config";
import cors from 'cors';
import { createTodo, updateTodo } from "./types.js";
import { Todo } from "./db.js";

const app = express();
app.use(express.json());

app.use(cors())

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "Invalid Inputs",
    });
    return;
  }
  await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  });
  res.status(200).json({
    message: "Todo Added Successfully",
  });
});

app.get("/todos",async (req, res) => {
  const todos = await Todo.find({})
  res.json({
    todos
  })
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "Invalid Inputs",
    });
    return;
  }
  await Todo.update({
  _id: req.body.id
  }, {
    completed: true
  })
  res.json({
    message: "Marked as completed"
  })
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
