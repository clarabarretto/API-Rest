import { Router } from 'express';
import userController from '../controllers/UserController';
import userSchema from '../schema/userSchema';

import loginRequired from '../middlewares/loginRequired';
import Validate from '../schema/validate';

const router = new Router();
router.get('/', userController.index);
router.get('/profile', loginRequired, userController.show);
router.post('/', Validate(userSchema.store), userController.store);
router.put('/', loginRequired, Validate(userSchema.update), userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

// index -> lista todos os usuários -> GET
// store/create -> cria um novo usu-ario -> POST
// delete -> apaga um usuário -> DELETE
// show -> mostra um usuário -> GET
// update -> atualiza um usuário -> PATCH or PUT
