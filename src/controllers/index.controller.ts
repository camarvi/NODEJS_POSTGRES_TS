import { Request , Response }  from 'express';
import { QueryResult} from 'pg';

// Importar la conexion a la base de datos
import { pool } from '../database';

// Devolver todos los usuarios de la base de datos

export const getUsers = async ( req: Request , res : Response): Promise<Response> => {

    try {
        const response: QueryResult = await pool.query('SELECT * FROM users');
        // Ver por consola lo que ha traido la consulta
        console.log(response.rows); //Veo las filas de la BD
        // Envio la respuesta al cliente
        return res.status(200).json(response.rows);
        }
    catch(e) {  // Capturar el error si se produce
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }    

};

// Buscar un usuario por su id
export const getUserbyId = (req : Request , res : Response) : Promise<Response> => {
    console.log(req.params.id); //  Parametro recibido
    res.send("Id recibido");     
}

/* 
// Crear un usuario
export const createUser = (req : Request , res : Response) : Promise<Response> => {

}


// Actualizar un usuario
export const updateUser = (req : Request , res : Response) : Promise<Response> => {

}


// Actualizar un usuario
export const deleteUser = (req : Request , res : Response) : Promise<Response> => {

} */