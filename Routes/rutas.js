// Este archivo establece las rutas o endpoints de cada servicio ofrecido por mi api

import express from 'express' // importamos express
import { Controladorhabitacion } from '../Controllers/controladorHabitacion.js'
import { ControladorReserva } from '../Controllers/ControladorReserva.js'

let controladorHabitacion = new Controladorhabitacion() // usando el controlador
let controladorReserva = new ControladorReserva() 

export let rutas = express.Router()

// rutas de habitacion
rutas.get('/hotelesanime/habitaciones', controladorHabitacion.buscarHabitaciones)
rutas.get('/hotelesanime/habitacion/:idHabitacion', controladorHabitacion.buscarHabitacionPorId)
rutas.post('/hotelesanime/habitacion', controladorHabitacion.registrarHabitacion)
rutas.put('/hotelesanime/habitacion/:idHabitacion', controladorHabitacion.editarHabitaciones)
// rutas de reservas
rutas.get('/hotelesanime/reservas', controladorReserva.buscarReservas)
rutas.get('/hotelesanime/reserva/:idReserva', controladorReserva.buscarReservaPorId)
rutas.post('/hotelesanime/reserva', controladorReserva.agregarReserva)
rutas.put('/hotelesanime/reserva/:idReserva', controladorReserva.editarReserva)
rutas.delete('/hotelesanime/reserva', controladorReserva.eliminarReserva)

