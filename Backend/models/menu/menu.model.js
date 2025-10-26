import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // e.g., Breakfast, Lunch
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
}, { timestamps: true });

export default mongoose.model("Menu", menuSchema);
