import { Router } from 'express';

const router = Router();

import { getUsers, getUserbyId } from '../controllers/index.controller';

//router.get('/test', (req, res)=> res.send("Hola Mundo"));

// RUTAS DE LA RESTAPI

router.get('/users', getUsers);
router.get('/users/:id', getUserbyId);
//router.post('/users', getUsers);
//router.put('/users/:id', getUsers);
//router.delete('/users/:id', getUsers);


export default router;