import express from 'express';
import authMddleware from '../middleware/auth.js'
import { placeOrder, userOrders, verifyOrder } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/place', authMddleware, placeOrder);
orderRouter.post('/verify', verifyOrder)
orderRouter.post('/userorders',authMddleware, userOrders)
export default orderRouter;
