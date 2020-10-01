"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const index_controller_1 = require("../controllers/index.controller");
//router.get('/test', (req, res)=> res.send("Hola Mundo"));
// RUTAS DE LA RESTAPI
router.get('/users', index_controller_1.getUsers);
exports.default = router;
