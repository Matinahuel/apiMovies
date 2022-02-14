const express = require("express")

function prueba(app){
    const router = express.Router()
    app.use("/pruebas", router)

    router.get('/otraruta', (req, res) => {

        return res.status(200).send('Hola, bienvenido!')
    
    })
    router.post('/', async(req, res) => {
    
         console.log(req.body)
        return res.status(200).send('Hola, Guardar!')
    
    })


}

module.exports = prueba
