import express from 'express' // importamos express
import { rutas } from '../Routes/rutas.js'
import { conectarConMongo } from '../Database/conexion.js'
import cors from 'cors'

export class ServidorAPI{

    constructor(){
        this.app = express()
        this.conectarConBD()
        this.activarBody()
        this.atenderPeticiones()
    }

    // metodos de la clase servidorAPI
    despertarServidor(){
        // conectamos a las varibles de entorno
        this.app.listen(process.env.PORT, function(){
            console.log('exito encendiendo el servidor ' +process.env.PORT)
        })
    }

    atenderPeticiones(){
        this.app.use('/',rutas)
    }

    conectarConBD(){
        conectarConMongo()
    }

    activarBody(){
        this.app.use(cors())
        this.app.use(express.json())
    }

}