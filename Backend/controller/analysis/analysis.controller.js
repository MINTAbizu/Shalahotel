import Order from "../models/orders.model.js";
import Expense from "../models/expenses.model.js";
import Customer from "../models/customer.model.js";
import Review from "../models/review.model.js";

// Get total revenue from orders
export const getRevenue = async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalPrice" },
          totalOrders: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(result[0] || { totalRevenue: 0, totalOrders: 0 });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get total expenses
export const getExpenses = async (req, res) => {
  try {
    const result = await Expense.aggregate([
      {
        $group: {
          _id: null,
          totalExpenses: { $sum: "$amount" },
          totalCount: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(result[0] || { totalExpenses: 0, totalCount: 0 });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get total number of customers
export const getCustomerStats = async (req, res) => {
  try {
    const totalCustomers = await Customer.countDocuments();
    res.status(200).json({ totalCustomers });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get average review rating
export const getReviewStats = async (req, res) => {
  try {
    const result = await Review.aggregate([
      {
        $group: {
          _id: null,
          averageRating: { $avg: "$rating" },
          totalReviews: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(result[0] || { averageRating: 0, totalReviews: 0 });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get monthly revenue chart data
export const getMonthlyRevenue = async (req, res) => {
  try {
    const data = await Order.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          revenue: { $sum: "$totalPrice" },
          orders: { $sum: 1 },
        },
      },
      { $sort: { "_id": 1 } },
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
// Get expense categories breakdown