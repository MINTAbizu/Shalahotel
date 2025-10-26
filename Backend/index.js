import express from  "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('MongoDB + Node.js backend is running!');
});



// Start server

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
