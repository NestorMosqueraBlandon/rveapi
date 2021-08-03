import {Router} from 'express';
import * as adminCtrl from '../controllers/adminController.js'
const router = Router();

router.post('/', adminCtrl.createAdmin);

router.post('/signin', adminCtrl.signin);

router.get('/', adminCtrl.findAllAdmins);

router.get('/:id', adminCtrl.findOneAdmin);

router.delete('/:id', adminCtrl.deleteAdmin);

export default router;