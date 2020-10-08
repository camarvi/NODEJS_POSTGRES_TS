"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserbyId = exports.getUsers = void 0;
// Importar la conexion a la base de datos
const database_1 = require("../database");
// Devolver todos los usuarios de la base de datos
exports.getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM users');
        // Ver por consola lo que ha traido la consulta
        console.log(response.rows); //Veo las filas de la BD
        // Envio la respuesta al cliente
        return res.status(200).json(response.rows);
    }
    catch (e) { // Capturar el error si se produce
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
});
// Buscar un usuario por su id
exports.getUserbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(req.params.id); //  Parametro recibido
    //res.send("Id recibido");  
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.json(response.rows);
});
// Crear un usuario
exports.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(req.body);
    //res.send('Recibido');
    const { name, email } = req.body;
    //console.log (name , email);
    //res.send('Recibido');
    const response = yield database_1.pool.query('INSERT INTO users (name, email) VALUES ($1,$2)', [name, email]);
    return res.json({
        "mesage": "User created ok",
        body: {
            user: {
                name,
                email
            }
        }
    });
});
// Actualizar un usuario
exports.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    try {
        yield database_1.pool.query('UPDATE users SET name=$1,email=$2 WHERE id=$3', [name, email, id]);
        return res.json("User Updated");
    }
    catch (e) {
        return res.json("Server Internal Error");
    }
});
// Actualizar un usuario
exports.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        yield database_1.pool.query('DELETE FROM users WHERE ID=$1', [id]);
        return res.json("Usuario Eliminado");
    }
    catch (e) {
        return res.json("Server Internal Error");
    }
});
