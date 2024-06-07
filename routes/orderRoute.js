import express from 'express';
import authMddleware from '../middleware/auth.js'
import { placeOrder } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/place', authMddleware, placeOrder);

export default orderRouter;
