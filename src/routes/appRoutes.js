import express from 'express';
import { interlace } from '../controllers/interlaceController.js';
import { orderListController } from '../controllers/orderListController.js';

const router = express.Router();

router.post('/ordenaLista', orderListController);

router.get('/interlace?', interlace);

export { router as appRoutes };
