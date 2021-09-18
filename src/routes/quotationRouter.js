import { Router } from 'express';
import * as quotationCtrl from '../controllers/quotationController.js';
const router = Router();

router.post('/', quotationCtrl.createQuotation);

router.get('/', quotationCtrl.findAllQuotations);

router.get('/:id', productCtrl.findOneQuotation);

router.delete('/:id', quotationCtrl.deleteQuotation);

export default router;
