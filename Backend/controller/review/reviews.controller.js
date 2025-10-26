import Review from "../models/review.model.js";

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('customerId');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const addReview = async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const approveReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, { approved: true }, { new: true });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
