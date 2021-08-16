import * as express from "express";
import crudControllers from "../../controllers/crudControllers"

const router = express.Router();

router.get('/', crudControllers.getAllUsers);

router.post('/', crudControllers.addUser);

router.put('/:id', crudControllers.changeUser)

router.delete('/:id', crudControllers.deleteUser);

export default router