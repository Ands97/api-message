import { Router } from "express";
import * as ApiController from '../controllers/apiController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/users', UserController.users);
router.post('/users', UserController.newUser);
router.get('/', ApiController.checklists);
router.get('/:id', ApiController.checklistId);
router.post('/', ApiController.addChecklist);
router.put('/:id', ApiController.updateChecklist);
router.delete('/:id', ApiController.deleteChecklist);
router.delete('/', ApiController.deleteAll);


export default router;