import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: String, // banner, text, image
  content: String,
  status: { type: String, default: 'active' },
}, { timestamps: true });

export default mongoose.model("Content", contentSchema);
