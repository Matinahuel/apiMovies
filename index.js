const express = require('express');
const cors = require("cors")
const config = require("./config/")
//Trayendo conexion base de datos

const {connection} = require("./config/db");
connection()

//importando routers
const prueba = require("./routers/index");
const movies = require('./routers/movies');
const users = require('./routers/users');
const auth = require('./routers/auth');

const app = express();

// Middlewares globales
app.use(express.json())
app.use(cors({
    origin:'*'
}))

// Utilizando las Rutas
movies(app)
prueba(app)
users(app)
auth(app)


app.get('/', (req, res) => {

    return res.status(200).send('Hola, bienvenido!')

})

app.listen(config.port, () => {
  
    console.log(`server run in: http://localhost:${config.port}`);
})