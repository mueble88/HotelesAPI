import { modeloHabitacion } from "../Models/ModeloHabitacion.js";

export class ServicioHabitacion{

    // aqui programo metodos para cada una de las consultas que quiero hacer en BD
    
    async buscarHabitacion(){
        let habitaciones = await modeloHabitacion.find()
        return habitaciones
    }

    async buscarHabitacionPorId(id){
        let habitacion = await modeloHabitacion.findById(id)
        return habitacion
    }

    async agregarHabitacionEnBD(datos){
        let datosValidados = new modeloHabitacion(datos)
        return await datosValidados.save()
    }

    async editarHabitacion(id, datos){
        return await modeloHabitacion.findByIdAndUpdate(id,datos)
    }
}