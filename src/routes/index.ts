import { Router } from 'express';

const router = Router();

import { getUsers } from '../controllers/index.controller';


//router.get('/test', (req, res)=> res.send("Hola Mundo"));


// RUTAS DE LA RESTAPI

router.get('/users', getUsers);

export default router;