import express from "express";
const app = express();
import dbConnect from "./connectDb.js";
import TaskModel from "./models/task.js";
import cors from "cors";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

dbConnect();

app.get("/", async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error in Task Fetch" });
  }
}); // All Task Fetch.

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await TaskModel.findOne({ _id: id });
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error in Task Fetch" });
  }
}); // Single Task Fetch.

app.post("/", async (req, res) => {
  const { title } = req.body;
  try {
    const newTask = new TaskModel({ title: title });
    await newTask.save();
    res.status(201).json({ message: "Task Insertion successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error in Task Insertion" });
  }
}); // Task Insertion Code

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await TaskModel.findOneAndUpdate({ _id: id }, { ...req.body });
    res.status(200).json({ message: "Task Update Sucess" });
  } catch (error) {
    res.status(500).json({ error: "Error in Task Update" });
  }
}); // Task Updation Code

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await TaskModel.findOneAndDelete({ _id: id });
    res.status(204).json({ message: "Task Deletation Sucess" });
  } catch (error) {
    res.status(500).json({ error: "Error in Task Deletation" });
  }
}); // Task Deletation Code

app.listen(4000, () => {
  console.log("Server Is Running on 4000 PORT");
});
