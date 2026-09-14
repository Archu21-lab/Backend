import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/school")
  .then(() => console.log("database connected succcessfully !"))
  .catch((err) => console.log(err.message));

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    course: { type: String, required: true },
    city: { type: String },
  },
  {
    timestamps: true,
  },
);

const student = mongoose.model("students", studentSchema);
await student.create({
  name: "aman gupta",
  age: 22,
  course: "MBA",
  city: "mumba",
});
