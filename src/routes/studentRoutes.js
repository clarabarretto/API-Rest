import { Router } from 'express';
import studentController from '../controllers/StudentController';
import studentSchema from '../schema/studentSchema';

import loginRequired from '../middlewares/loginRequired';
import Validate from '../schema/validate';

const router = new Router();

router.get('/', studentController.index);
router.post('/', loginRequired, Validate(studentSchema.store), studentController.store);
router.get('/:id', Validate(studentSchema.show), studentController.show);
router.put('/:id', loginRequired, Validate(studentSchema.update), studentController.update);
router.delete('/:id', loginRequired, Validate(studentSchema.delete), studentController.delete);

export default router;
