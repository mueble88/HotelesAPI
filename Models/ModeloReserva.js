import mongoose from 'mongoose';

// esquema de datos es un estandar donde aparecen 
// solo los datos con que el api va trabajar
const Schema = mongoose.Schema;

const EsquemaReserva = new Schema({
    
    idHabitacion:{
        required:true,
        type:String
    },
    fechaEntrada:{
        required:true,
        type:Date
    },
    fechaSalida:{
        required:true,
        type:Date
    },
    numeroAdultos:{
        required:true,
        type:Number
    },
    numeroNinos:{
        required:true,
        type:Number
    },
    costoReserva:{
        required:false,
        type:Number
    },
  });
  // validar fechas cuando entra y cuando sale
  // validar cantidad de personas 
  // validar costo de la reserva , calcular

  export const modeloReserva = mongoose.model('reservas', EsquemaReserva)