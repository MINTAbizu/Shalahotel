import express from  "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import userroute from './route/user/user.route.js'
const app = express();
const PORT = process.env.PORT || 5000;
import cors from "cors";

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// custom route
app.use('/api',userroute)




// Start server

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
