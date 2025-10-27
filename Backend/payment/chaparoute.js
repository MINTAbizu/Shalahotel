import express from 'express';

import { initiatePayment,verifyPayment } from '../payment/chapaController.js';
// import { verifyPayment } from './controllers/chapaController.js';
const router = express.Router();

router.post('/chapa/pay', initiatePayment);




// const router = express.Router();

router.get('/chapa/verify/:tx_ref', verifyPayment);
export default router;