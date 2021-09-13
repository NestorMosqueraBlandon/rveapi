import { Router } from 'express';
import * as computerCtrl from '../controllers/computerController.js';
const router = Router();

router.post('/', computerCtrl.createComputer);

router.get('/', computerCtrl.findAllComputers);

// router.get('/:id', userCtrl.findOneUser);

router.delete('/:id', computerCtrl.deleteComputer);

export default router;
