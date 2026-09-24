import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    name: { type: string, required: true },
    email: { type: string, required: true, unique: true },
    password: { type: string, required: true },
  },
  {
    timestamps: "true",
  },
);

export const Auth = mongoose.model("auth", authSchema);
