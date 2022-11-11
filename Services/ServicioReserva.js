import { modeloReserva } from "../Models/ModeloReserva.js";

export class ServicioReserva{
    // aqui programo metodos para cada una de las consultas que quiero hacer en BD

    async buscarReserva(){
        let reservas = await modeloReserva.find()
        return reservas 
    }

    async buscarReservaPorId(id){
        let reserva = await modeloReserva.findById(id)
        return reserva
    }

    async agregarReservaEnBD(datos){
        let datosValidados =  new modeloReserva(datos)
        return await datosValidados.save() 
    }

    async editarReserva(id, datos){
        return await modeloReserva.findByIdAndDelete(id, datos)
    }

    async eliminarReservaPorId(id){
        return await modeloReserva.findByIdAndDelete(id)
    }
}