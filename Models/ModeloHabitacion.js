import mongoose from 'mongoose';

// esquema de datos es un estandar donde aparecen 
// solo los datos con que el api va trabajar
const Schema = mongoose.Schema;

const EsquemaHabitacion = new Schema({
    
    nombre:{
        required:true,
        type:String
    },
    valorNoche:{
        required:true,
        type:Number
    },
    descripcion:{
        required:true,
        type:String
    },
    fotografias:{
        required:true,
        type:[String]
    },
    numeroMaximoPersonas:{
        required:true,
        type:Number
    },
  });

  export const modeloHabitacion = mongoose.model('habitaciones', EsquemaHabitacion)