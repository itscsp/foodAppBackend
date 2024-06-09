import express from 'express';
import authMddleware from '../middleware/auth.js'
import { placeOrder, verifyOrder } from '../controllers/orderController.js';
import { verify } from 'jsonwebtoken';

const orderRouter = express.Router();

orderRouter.post('/place', authMddleware, placeOrder);
orderRouter.post('/verify', verifyOrder)

export default orderRouter;
