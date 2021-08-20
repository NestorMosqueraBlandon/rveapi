import {Router} from 'express';
import * as productCtrl from '../controllers/productController.js'
const router = Router();

router.post('/', productCtrl.createProduct);

router.get('/', productCtrl.findAllProducts);

// router.get('/:id', userCtrl.findOneUser);

router.delete('/:id', productCtrl.deleteUser);

export default router;