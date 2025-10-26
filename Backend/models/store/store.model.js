import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  manager: String,
  contact: String,
}, { timestamps: true });

export default mongoose.model("Store", storeSchema);
