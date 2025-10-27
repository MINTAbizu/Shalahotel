import express from  "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import userroute from './route/user/user.route.js'
import booking from './route/Booking/book.route.js'
import menuRoutes from "./route/menu/menu.routes.js";
// import ordersRoutes from "./routes/orders.routes.js";
// import servicesRoutes from "./routes/services.routes.js";
import inventoryRoutes from "./route/inventory/inventory.routes.js";


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
app.use('/api/menu', menuRoutes)
app.use('/api/menu', inventoryRoutes)

// app.use("/api/menu", menuRoutes);
// app.use("/api/orders", ordersRoutes);
// app.use("/api/services", servicesRoutes);
// app.use("/api/inventory", inventoryRoutes);
// app.use("/api/expenses", expensesRoutes);
// app.use("/api/store", storeRoutes);
// app.use("/api/content", contentRoutes);
// app.use("/api/customers", customersRoutes);
// app.use("/api/reviews", reviewsRoutes);
// app.use("/api/analysis", analysisRoutes);


// Start server

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
