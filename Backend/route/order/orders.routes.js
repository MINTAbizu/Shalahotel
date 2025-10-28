// backend/routes/order.routes.js
import express from 'express';
import { createOrder, getAllOrders, getOrderById } from '../../controller/order/orders.controller.js';
// import { createOrder, getOrderById, getAllOrders } from '../../controller/order/orders.controller';

const router = express.Router();

router.post('/create', createOrder);
router.get('/:id', getOrderById);
router.get('/all', getAllOrders); // admin

export default router;
