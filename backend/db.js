import mongoose from "mongoose";
import "dotenv/config";

const mongoURL = process.env.MONGO_URL;
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log("MongoDB Connection err:", err);
  });

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);

export { Todo };
