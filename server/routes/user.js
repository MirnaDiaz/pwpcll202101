// Import Router
import { Router } from 'express';

//Importando el controlador
import userController  from '@server/controllers/userController';

//creando instancia de router
const router = new Router();

/* GET users listing. */
router.get('/', userController.index);

export default  router;
