import * as dotenv from 'dotenv' // importamos las variables de entorno
dotenv.config()

import { ServidorAPI } from './API/ServidorAPI.js'

let servidorHoteles = new ServidorAPI() // intancia de una clase (objeto)
servidorHoteles.despertarServidor()

