import express from  "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import userroute from './route/user/user.route.js'
import booking from './route/Booking/book.route.js'

const PORT = process.env.PORT || 5000;
import cors from "cors";

const app = express();
// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// custom route
app.use('/api',userroute)
app.use('/api',booking)




// Start server

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
