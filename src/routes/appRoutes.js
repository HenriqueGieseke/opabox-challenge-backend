import express from 'express';
import { orderListController } from '../controllers/orderListController.js';

const router = express.Router();

router.post('/ordenaLista', orderListController);

export { router as appRoutes };
