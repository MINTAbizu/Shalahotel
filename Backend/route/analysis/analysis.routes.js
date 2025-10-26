import express from "express";
import { getRevenue, getExpenses, getCustomerStats, getReviewStats, getMonthlyRevenue } from "../controllers/analysis.controller.js";

const router = express.Router();

router.get("/revenue", getRevenue);
router.get("/expenses", getExpenses);
router.get("/customers", getCustomerStats);
router.get("/reviews", getReviewStats);
router.get("/monthly-revenue", getMonthlyRevenue);

export default router;
// Get total revenue