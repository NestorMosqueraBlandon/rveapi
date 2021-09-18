import { Router } from 'express';
import * as productCtrl from '../controllers/productController.js';
const router = Router();

router.post('/', productCtrl.createProduct);

router.get('/', productCtrl.findAllProducts);

router.get('/:id', productCtrl.findOneProduct);

router.delete('/:id', productCtrl.deleteProduct);

export default router;
