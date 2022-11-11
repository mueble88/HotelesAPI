import { ServicioHabitacion } from "../Services/ServicioHabitacion.js"

export class Controladorhabitacion{

    constructor(){}

    async buscarHabitaciones(request, response){

        let objetoServicioHabitacion = new ServicioHabitacion()
        try{
            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":await objetoServicioHabitacion.buscarHabitacion(),
                "estado":true,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
                "estado":false,
            })
        }
        // response.send("Estoy buscando habitaciones desde el controlador")
    }

    async buscarHabitacionPorId(request, response){
        let id =request.params.idHabitacion // recibo id de la peticion
        // console.log('el id es: '+idhabitacion)
        let objetoServicioHabitacion = new ServicioHabitacion()
        try{
            response.status(200).json({
                "mensaje":"exito en la consulta "+id,
                "datos":await objetoServicioHabitacion.buscarHabitacionPorId(id),
                "estado":true,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
                "estado":false,
            })
        }
        //response.send("Estoy buscando una habitacion por id desde el controlador")
    }

    async registrarHabitacion(request, response){

        let datosHabitacion = request.body // obtengo datos del body
        let objetoServicioHabitacion = new ServicioHabitacion()
        
        try{
            if(datosHabitacion.numeroMaximoPersonas <= 5 && datosHabitacion.numeroMaximoPersonas >=0){
                await objetoServicioHabitacion.agregarHabitacionEnBD(datosHabitacion)
                response.status(200).json({
                    "mensaje":"exito registrando habitaciones",
                    "datos":null,
                    "estado":true,
                })
            }else{
                response.status(400).json({
                    "mensaje":"No caben tantas personas",
                    "datos":null,
                    "estado":false,
                 })
             }
            
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la registrada "+error,
                "datos":null,
                "estado":false,
            })
        }
        // response.send("Estoy agregando desde el controlador")
    }

    async editarHabitaciones(request, response){
        let id = request.params.idHabitacion
        let datosHabitacion = request.body
        // console.log(id, datosHabitacion)
        let objetoServicioHabitacion = new ServicioHabitacion()
        try{
            await objetoServicioHabitacion.editarHabitacion(id, datosHabitacion)
            response.status(200).json({
                "mensaje":"exito editando " +id,
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
        // response.send("Estoy editando desde el controlador")
    } 
}