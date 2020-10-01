import express from 'express';
import indexRoutes from './routes/index';

const app = express();


//**************** */ middlewares***************************  //
// poder trabajar con objetos json
app.use(express.json());

// poder trasformar los elementos de un formulario
// a un objeto json
app.use(express.urlencoded({extended:false}));

app.use(indexRoutes);


app.listen(4000);

console.log("Sever on Port", 4000);