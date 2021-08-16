import * as express from "express";
import controllers from "../controllers/controllers"

export const router = express.Router();

router.get('/read-files', controllers.readFile)



export default router