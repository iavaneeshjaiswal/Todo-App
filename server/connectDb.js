import mongoose from "mongoose";

function dbConnect() {
  mongoose.connect("mongodb://localhost:27017/TodoList").then(() => {
    console.log("DB is Connected!");
  });
}

export default dbConnect;
