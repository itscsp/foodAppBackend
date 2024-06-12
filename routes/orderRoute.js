import express from 'express';
import authMddleware from '../middleware/auth.js'
import { listOrders, placeOrder, userOrders, verifyOrder } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/place', authMddleware, placeOrder);
orderRouter.post('/verify', verifyOrder)
orderRouter.post('/userorders',authMddleware, userOrders)
orderRouter.get('/list', listOrders)

export default orderRouter;
