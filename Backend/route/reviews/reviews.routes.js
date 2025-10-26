import express from "express";
import { getReviews, addReview, approveReview, deleteReview } from "../controllers/reviews.controller.js";

const router = express.Router();

router.get("/", getReviews);
router.post("/", addReview);
router.put("/approve/:id", approveReview);
router.delete("/:id", deleteReview);

export default router;
