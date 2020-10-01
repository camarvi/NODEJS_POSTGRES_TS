"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = express_1.default();
//**************** */ middlewares***************************  //
// poder trabajar con objetos json
app.use(express_1.default.json());
// poder trasformar los elementos de un formulario
// a un objeto json
app.use(express_1.default.urlencoded({ extended: false }));
app.use(index_1.default);
app.listen(4000);
console.log("Sever on Port", 4000);
