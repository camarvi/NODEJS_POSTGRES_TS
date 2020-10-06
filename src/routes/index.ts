import { Router } from 'express';

const router = Router();

import { getUsers, getUserbyId, createUser } from '../controllers/index.controller';

//router.get('/test', (req, res)=> res.send("Hola Mundo"));

// RUTAS DE LA RESTAPI

router.get('/users', getUsers);
router.get('/users/:id', getUserbyId);
router.post('/users', createUser);
//router.put('/users/:id', getUsers);
//router.delete('/users/:id', getUsers);


export default router;