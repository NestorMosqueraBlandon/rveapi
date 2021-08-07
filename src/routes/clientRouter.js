import {Router} from 'express';
import * as userCtrl from '../controllers/clientController.js'
const router = Router();

router.post('/', userCtrl.createClient);

router.get('/', userCtrl.findAllClients);

// router.get('/:id', userCtrl.findOneUser);

// router.delete('/:id', userCtrl.deleteUser);

export default router;