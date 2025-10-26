import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  rating: { type: Number, required: true },
  comment: String,
  date: { type: Date, default: Date.now },
  approved: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model("Review", reviewSchema);
