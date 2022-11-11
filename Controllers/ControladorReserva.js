import { ServicioHabitacion } from "../Services/ServicioHabitacion.js"
import { ServicioReserva } from "../Services/ServicioReserva.js"

export class ControladorReserva{
    
    constructor(){}

    async buscarReservas(request, response){
        let objetoServicioReserva = new ServicioReserva()

        try{
            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":await objetoServicioReserva.buscarReserva(),
                "estado":true,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
                "estado":false,
            })
        }
        // response.send("Buscamos las reservas desde el controlador")
    }

    async buscarReservaPorId(request, response){
        let id = request.params.idReserva
        let objetoServicioReserva = new ServicioReserva()
        try{
            response.status(200).json({
                "mensaje":"exito en la consulta por "+id,
                "datos":objetoServicioReserva.buscarReservaPorId(id),
                "estado":true,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
                "estado":false,
            })
        }
        // response.send("Buscamos la reserva por id desde el controlador")
    }

    async agregarReserva(request, response){
        let objetoServicioReserva = new ServicioReserva()
        let objetoServicioHabitacion = new ServicioHabitacion()
        let datosReserva = request.body
        let datosHabitacion = request.body
        //----------------------------------------------------------->
        let habitacion
        let idHabitacion = datosHabitacion.idHabitacion          
        let totalPersonas = parseFloat(datosReserva.numeroAdultos) + parseFloat(datosReserva.numeroNinos)
        let fechaEntrada = new Date(datosReserva.fechaEntrada).getTime()
        let fechaSalida = new Date(datosReserva.fechaSalida).getTime()
        let dias = (fechaSalida - fechaEntrada)/(1000 * 60 * 60 * 24)
        let costoPorDias
        

        try{
            habitacion = await objetoServicioHabitacion.buscarHabitacionPorId(idHabitacion)
            
            if(idHabitacion =! null){ 
                if(datosHabitacion.numeroMaximoPersonas >= totalPersonas ){
                    if(dias >= 0){
                        if(fechaEntrada < fechaSalida){
                            costoPorDias = dias * habitacion.valorNoche  
                            datosReserva.costoReserva = costoPorDias  
                        }else{
                            response.status(400).json({
                                "mensaje":"La fechas estan mal digitadas",
                                "datos":null,
                                "estado":false,
                            })
                        }
                                          
                    }else{
                        response.status(400).json({
                            "mensaje":"No se quedo en el hotel",
                            "datos":null,
                            "estado":false,
                        })
                    }
                }else{
                    response.status(400).json({
                        "mensaje":"se excede el número de personas",
                        "datos":null,
                        "estado":false,
                    })
                }
            }else{
                response.status(400).json({
                    "mensaje":"No existe la habitación",
                    "datos":null,
                    "estado":false,
                })
            }
            
            // si todas las validaciones son verdaderas trae el status 200
            response.status(200).json({
                "mensaje":"exito agregando",
                "datos":null,
                "estado":true,
            })

            console.log("---------------------------------")
            console.log("Id habitacion: "+habitacion)
            console.log("Id habitacion: "+idHabitacion)
            console.log("Total personas: "+totalPersonas)  
            console.log("Dias de hospedaje: "+dias)  
            console.log("Costo hospedaje: "+costoPorDias)  
            console.log("---------------------------------")

            
            await objetoServicioReserva.agregarReservaEnBD(datosReserva)
           
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la agregada "+error,
                "datos":null,
                "estado":false,
            })
        }
        // response.send("Agrega reserva desde el controlador")
    }

    async editarReserva(request, response){
        let id = request.params.idReserva
        let datosReserva = request.body
        let objetoServicioReserva = new ServicioReserva()
        try{
            await objetoServicioReserva.editarReserva(id, datosReserva)
            response.status(200).json({
                "mensaje":"exito editando por "+id,
                "datos":null,
                "estado":true,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la editada "+error,
                "datos":null,
                "estado":false,
            })
        }
        // response.send("Editar reserva desde el controlador")
    }
    
    async eliminarReserva(request, response){
        let id = request.params.idReserva
        let objetoServicioReserva = new ServicioReserva()
        try{
            await objetoServicioReserva.eliminarReservaPorId(id)
            response.status(200).json({
                "mensaje":"exito eliminando",
                "datos":null,
                "estado":true,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la eliminada "+error,
                "datos":null,
                "estado":false,
            })
        }
        // response.send("Eliminar reserva desde el controlador")
    }
}